import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { TopBarModule } from "./shared/modules/top-bar/top-bar.module";
import { AuthInterceptor } from "./shared/services/auth-interceptor.service";
import { GlobalFeedModule } from "./global-feed/global-feed.module";
import { BannerModule } from "./shared/modules/banner/banner.module";
import { ErrorMessageModule } from "./shared/modules/error-message/error-message.module";
import { LoadingModule } from "./shared/modules/loading/loading.module";
import { PaginationModule } from "./shared/modules/pagination/pagination.module";
import { routerReducer, StoreRouterConnectingModule } from "@ngrx/router-store";
import { TagsModule } from "./shared/modules/tags/tags.module";

@NgModule({
      declarations: [AppComponent],
      imports: [
            BrowserModule,
            AppRoutingModule,
            AuthModule,
            StoreModule.forRoot({ router: routerReducer }),
            StoreDevtoolsModule.instrument({
                  maxAge: 25,
                  logOnly: environment.production,
                  autoPause: true,
            }),
            HttpClientModule,
            EffectsModule.forRoot([]),
            TopBarModule,
            GlobalFeedModule,
            BannerModule,
            ErrorMessageModule,
            LoadingModule,
            PaginationModule,
            StoreRouterConnectingModule.forRoot(),
            TagsModule,
      ],
      providers: [
            {
                  provide: HTTP_INTERCEPTORS,
                  useClass: AuthInterceptor,
                  multi: true,
            },
      ],
      bootstrap: [AppComponent],
})
export class AppModule {}

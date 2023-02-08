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
import { TagListModule } from "./shared/modules/tagList/tagList.module";
import { YourFeedModule } from "./your-feed/your-feed.module";
import { PopularTagFeedModule } from "./popular-tag-feed/popular-tag-feed.module";
import { ArticleModule } from "./article/article.module";
import { CreateArticleComponent } from "./create-article/components/create-article.component";
import { EditArticleComponent } from "./edit-article/components/edit-article.component";
import { CreateArticleModule } from "./create-article/create-article.module";
import { EditArticleModule } from "./edit-article/edit-article.module";

@NgModule({
      declarations: [
            AppComponent,
            CreateArticleComponent,
            EditArticleComponent,
      ],
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
            TagListModule,
            YourFeedModule,
            PopularTagFeedModule,
            ArticleModule,
            CreateArticleModule,
            EditArticleModule,
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

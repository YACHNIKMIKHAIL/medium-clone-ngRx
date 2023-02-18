import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./components/user-profile.component";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { GetUserProfileEffect } from "./store/effects/get-user-profile.effect";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducers";
import { LoadingModule } from "../shared/modules/loading/loading.module";
import { ErrorMessageModule } from "../shared/modules/error-message/error-message.module";
import { FeedModule } from "../shared/modules/feed/feed.module";
import { FollowModule } from "../shared/modules/follow/follow.module";

const routes: Routes = [
      {
            path: "profiles/:slug",
            component: UserProfileComponent,
      },
      {
            path: "profiles/:slug/favorites",
            component: UserProfileComponent,
      },
];
@NgModule({
      declarations: [UserProfileComponent],
      imports: [
            CommonModule,
            RouterModule.forChild(routes),
            StoreModule.forFeature("userProfile", reducer),
            EffectsModule.forFeature([GetUserProfileEffect]),
            LoadingModule,
            ErrorMessageModule,
            FeedModule,
            FollowModule,
      ],
})
export class UserProfileModule {}

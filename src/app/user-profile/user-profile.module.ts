import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./components/user-profile.component";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { GetUserProfileEffect } from "./store/effects/get-user-profile.effect";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducers";

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
            StoreModule.forFeature("User profile", reducer),
            EffectsModule.forFeature([GetUserProfileEffect]),
      ],
})
export class UserProfileModule {}

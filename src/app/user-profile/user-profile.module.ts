import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./components/user-profile.component";
import { RouterModule, Routes } from "@angular/router";

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
      imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserProfileModule {}

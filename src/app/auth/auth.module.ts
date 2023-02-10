import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./components/register/register.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducers";
import { AuthService } from "./services/auth.service";
import { RegisterEffect } from "./store/effects/register.effect";
import { EffectsModule } from "@ngrx/effects";
import { BackendErrorMessagesModule } from "../shared/modules/backend-error-messages/backend-error-messages.module";
import { PersistenceService } from "../shared/services/persistence.service";
import { LoginEffect } from "./store/effects/login.effect";
import { LoginComponent } from "./components/login/login.component";
import { GetCurrentUserEffect } from "./store/effects/get-current-user.effect";
import { UpdateCurrentUserEffect } from "./store/effects/update-current-user.effect";

const routes: Routes = [
      {
            path: "register",
            component: RegisterComponent,
      },
      {
            path: "login",
            component: LoginComponent,
      },
];

@NgModule({
      declarations: [RegisterComponent, LoginComponent],
      imports: [
            CommonModule,
            RouterModule.forChild(routes),
            ReactiveFormsModule,
            StoreModule.forFeature("auth", reducer),
            EffectsModule.forFeature([
                  RegisterEffect,
                  LoginEffect,
                  GetCurrentUserEffect,
                  UpdateCurrentUserEffect,
            ]),
            BackendErrorMessagesModule,
      ],
      providers: [AuthService, PersistenceService],
})
export class AuthModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsComponent } from "./components/settings/settings.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { settingsReducer } from "./store/redusers";
import { ReactiveFormsModule } from "@angular/forms";
import { LoadingModule } from "../shared/modules/loading/loading.module";

const routes: Routes = [
      {
            path: "settings",
            component: SettingsComponent,
      },
];
@NgModule({
      declarations: [SettingsComponent],
      imports: [
            CommonModule,
            RouterModule.forChild(routes),
            StoreModule.forFeature("settings", settingsReducer),
            ReactiveFormsModule,
            LoadingModule,
      ],
})
export class SettingsModule {}

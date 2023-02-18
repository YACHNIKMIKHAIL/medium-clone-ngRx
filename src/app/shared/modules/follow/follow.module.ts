import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FollowComponent } from "./components/follow.component";
import { FollowEffect } from "./store/effects/follow.effect";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducers";
import { LoadingModule } from "../loading/loading.module";

@NgModule({
      declarations: [FollowComponent],
      exports: [FollowComponent],
      imports: [
            CommonModule,
            EffectsModule.forFeature([FollowEffect]),
            StoreModule.forFeature("Follow", reducer),
            LoadingModule,
      ],
})
export class FollowModule {}

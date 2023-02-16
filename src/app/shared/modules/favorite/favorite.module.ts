import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FavoriteComponent } from "./components/favorite.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { favoriteFeedEffect } from "./store/effects/get-feed.effect";
import { LoadingModule } from "../loading/loading.module";
import { reducer } from "./store/reducers";

@NgModule({
      declarations: [FavoriteComponent],
      exports: [FavoriteComponent],
      imports: [
            CommonModule,
            StoreModule.forFeature("favorite", reducer),
            EffectsModule.forFeature([favoriteFeedEffect]),
            LoadingModule,
      ],
})
export class FavoriteModule {}

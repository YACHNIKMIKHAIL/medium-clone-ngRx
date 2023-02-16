import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddToFavoritesComponent } from "./components/add-to-favorites.component";
import { EffectsModule } from "@ngrx/effects";
import { AddToFavoritesEffect } from "./store/effects/add-to-favorites.effect";

@NgModule({
      declarations: [AddToFavoritesComponent],
      exports: [AddToFavoritesComponent],
      imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
})
export class AddToFavoritesModule {}

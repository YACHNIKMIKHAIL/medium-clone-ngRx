import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopularTagsComponent } from "./components/popular-tags.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { GetPopularTagsEffectEffect } from "./store/effects/get-popular-tags.effect";
import { reducer } from "./store/reducers";

@NgModule({
      declarations: [PopularTagsComponent],
      exports: [PopularTagsComponent],
      imports: [
            CommonModule,
            StoreModule.forFeature("PopularTags", reducer),
            EffectsModule.forFeature([GetPopularTagsEffectEffect]),
      ],
})
export class PopularTagsModule {}

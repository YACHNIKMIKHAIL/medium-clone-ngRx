import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopularTagsComponent } from "./components/popular-tags.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducer } from "./store/reducers";
import { LoadingModule } from "../loading/loading.module";
import { GetPopularTagsEffect } from "./store/effects/get-popular-tags.effect";

@NgModule({
      declarations: [PopularTagsComponent],
      exports: [PopularTagsComponent],
      imports: [
            CommonModule,
            StoreModule.forFeature("popularTags", reducer),
            EffectsModule.forFeature([GetPopularTagsEffect]),
            LoadingModule,
      ],
})
export class PopularTagsModule {}

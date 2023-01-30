import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeedComponent } from "./components/feed.component";
import { EffectsModule } from "@ngrx/effects";
import { GetFeedEffect } from "./store/effects/get-feed.effect";

@NgModule({
      declarations: [FeedComponent],
      exports: [FeedComponent],
      imports: [CommonModule, EffectsModule.forFeature([GetFeedEffect])],
})
export class FeedModule {}

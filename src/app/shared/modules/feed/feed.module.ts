import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeedComponent } from "./components/feed.component";
import { EffectsModule } from "@ngrx/effects";
import { GetFeedEffect } from "./store/effects/get-feed.effect";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducers";
import { RouterModule } from "@angular/router";
import { ErrorMessageModule } from "../error-message/error-message.module";
import { LoadingModule } from "../loading/loading.module";
import { PaginationModule } from "../pagination/pagination.module";
import { TagListModule } from "../tagList/tagList.module";
import { FavoriteModule } from "../favorite/favorite.module";

@NgModule({
      declarations: [FeedComponent],
      exports: [FeedComponent],
      imports: [
            CommonModule,
            StoreModule.forFeature("feed", reducer),
            EffectsModule.forFeature([GetFeedEffect]),
            RouterModule,
            ErrorMessageModule,
            LoadingModule,
            PaginationModule,
            TagListModule,
            FavoriteModule,
      ],
})
export class FeedModule {}

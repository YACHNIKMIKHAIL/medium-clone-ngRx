import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleComponent } from "./components/article.component";
import { EffectsModule } from "@ngrx/effects";
import { GetArticleEffect } from "./store/effects/get-article.effect";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducers";
import { RouterModule } from "@angular/router";
import { ErrorMessageModule } from "../shared/modules/error-message/error-message.module";
import { LoadingModule } from "../shared/modules/loading/loading.module";

@NgModule({
      declarations: [ArticleComponent],
      exports: [ArticleComponent],
      imports: [
            CommonModule,
            StoreModule.forFeature("article", reducer),
            EffectsModule.forFeature([GetArticleEffect]),
            RouterModule,
            ErrorMessageModule,
            LoadingModule,
      ],
})
export class ArticleModule {}

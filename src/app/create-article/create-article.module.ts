import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateArticleComponent } from "./components/create-article.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CreateArticleEffect } from "./store/effects/create-article.effect";
import { saveArticleReducer } from "./store/reducers";
import { ArticleFormModule } from "../shared/modules/article-form/article-form.module";

const routes: Routes = [
      {
            path: "articles/new",
            component: CreateArticleComponent,
      },
];

@NgModule({
      declarations: [CreateArticleComponent],
      imports: [
            CommonModule,
            RouterModule.forChild(routes),
            StoreModule.forFeature("createArticle", saveArticleReducer),
            EffectsModule.forFeature([CreateArticleEffect]),
            ArticleFormModule,
      ],
})
export class CreateArticleModule {}

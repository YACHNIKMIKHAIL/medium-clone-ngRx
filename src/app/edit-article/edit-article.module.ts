import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EditArticleComponent } from "./components/edit-article.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { EditArticleEffect } from "./store/effects/edit-article.effect";
import { GetArticleEffect } from "./store/effects/get-article.effect";
import { editArticleReducer } from "./store/reducers";
import { LoadingModule } from "../shared/modules/loading/loading.module";
import { ArticleFormModule } from "../shared/modules/article-form/article-form.module";

const routes: Routes = [
      {
            path: "articles/:slug/edit",
            component: EditArticleComponent,
      },
];

@NgModule({
      declarations: [EditArticleComponent],
      imports: [
            CommonModule,
            RouterModule.forChild(routes),
            StoreModule.forFeature("editArticle", editArticleReducer),
            EffectsModule.forFeature([EditArticleEffect, GetArticleEffect]),
            LoadingModule,
            ArticleFormModule,
      ],
})
export class EditArticleModule {}

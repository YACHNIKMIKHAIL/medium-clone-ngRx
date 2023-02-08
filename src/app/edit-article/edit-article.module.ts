import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EditArticleComponent } from "./components/edit-article.component";
import { StoreModule } from "@ngrx/store";
import { reducer } from "../article/store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { EditArticleEffect } from "./store/effects/edit-article.effect";

const routes: Routes = [
      {
            path: "articles/edit/:slug",
            component: EditArticleComponent,
      },
];

@NgModule({
      declarations: [],
      imports: [
            CommonModule,
            RouterModule.forChild(routes),
            StoreModule.forFeature("editArticle", reducer),
            EffectsModule.forFeature([EditArticleEffect]),
      ],
})
export class EditArticleModule {}

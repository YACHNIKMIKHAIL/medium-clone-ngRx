import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateArticleComponent } from "./components/create-article.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { reducer } from "../article/store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { CreateArticleEffect } from "./store/effects/create-article.effect";

const routes: Routes = [
      {
            path: "articles/new",
            component: CreateArticleComponent,
      },
];

@NgModule({
      declarations: [],
      imports: [
            CommonModule,
            RouterModule.forChild(routes),
            StoreModule.forFeature("createArticle", reducer),
            EffectsModule.forFeature([CreateArticleEffect]),
      ],
})
export class CreateArticleModule {}

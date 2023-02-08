import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateArticleComponent } from "./components/create-article.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
      {
            path: "articles/new",
            component: CreateArticleComponent,
      },
];

@NgModule({
      declarations: [],
      imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CreateArticleModule {}

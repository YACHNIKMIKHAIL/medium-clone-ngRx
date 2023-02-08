import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EditArticleComponent } from "./components/edit-article.component";

const routes: Routes = [
      {
            path: "edit",
            component: EditArticleComponent,
      },
];

@NgModule({
      declarations: [],
      imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EditArticleModule {}

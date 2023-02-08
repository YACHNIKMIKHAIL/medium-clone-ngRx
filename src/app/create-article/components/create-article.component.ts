import { Component, OnInit } from "@angular/core";
import { ArticleInputInterface } from "../../shared/types/article-input.interface";

@Component({
      selector: "mc-create-article",
      templateUrl: "./create-article.component.html",
      styleUrls: ["./create-article.component.scss"],
})
export class CreateArticleComponent implements OnInit {
      initialValues: ArticleInputInterface = {
            title: "",
            description: "",
            body: "",
            tags: [""],
      };
      constructor() {}

      ngOnInit(): void {}

      createArticle($event: ArticleInputInterface) {
            console.log($event);
      }
}

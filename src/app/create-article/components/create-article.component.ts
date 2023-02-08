import { Component, OnInit } from "@angular/core";
import { ArticleInputInterface } from "../../shared/types/article-input.interface";
import { select, Store } from "@ngrx/store";
import { createArticleAction } from "../store/actions/create-article.actions";
import { Observable } from "rxjs";
import { articleErrorSelector, isSubmittingSelector } from "../store/selectors";
import { BackendErrorsInterface } from "../../shared/types/backendErrors.interface";

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
            tagList: [],
      };
      public isSubmitting$!: Observable<boolean>;
      public error$ = new Observable<BackendErrorsInterface | null>();
      constructor(private store: Store) {}

      ngOnInit(): void {
            this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
            this.error$ = this.store.pipe(select(articleErrorSelector));
      }

      createArticle(articleInput: ArticleInputInterface) {
            this.store.dispatch(createArticleAction({ articleInput }));
      }
}

import { Component, OnInit } from "@angular/core";
import { ArticleInputInterface } from "../../shared/types/article-input.interface";
import { filter, map, Observable } from "rxjs";
import { BackendErrorsInterface } from "../../shared/types/backend-errors.interface";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { getEditableArticleAction } from "../store/actions/get-article.actions";
import {
      getEditableArticle,
      isLoadingSelector,
      isSubmittingSelector,
      updateArticleErrorSelector,
} from "../store/selectors";
import { updateArticleAction } from "../store/actions/update-article.actions";

@Component({
      selector: "mc-edit-article",
      templateUrl: "./edit-article.component.html",
      styleUrls: ["./edit-article.component.scss"],
})
export class EditArticleComponent implements OnInit {
      public editableArticle = new Observable<any>();
      public isSubmitting$ = new Observable<boolean>();
      public isLoading$ = new Observable<boolean>();
      public error$ = new Observable<BackendErrorsInterface | null>();
      public slug = "";
      constructor(private route: ActivatedRoute, private store: Store) {}

      ngOnInit(): void {
            this.initValues();
            this.fetchArticle();
      }

      fetchArticle(): void {
            this.store.dispatch(getEditableArticleAction({ slug: this.slug }));
      }

      initValues(): void {
            this.slug = this.route.snapshot.paramMap.get("slug") as string;
            this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
            this.isLoading$ = this.store.pipe(select(isLoadingSelector));
            this.error$ = this.store.pipe(select(updateArticleErrorSelector));

            this.editableArticle = this.store.pipe(
                  select(getEditableArticle),
                  filter(Boolean),
                  map(article => {
                        return {
                              title: article?.title,
                              description: article?.description,
                              body: article?.body,
                              tagList: article?.tagList,
                        };
                  }),
            );
      }

      saveEditArticle(articleInput: ArticleInputInterface) {
            this.store.dispatch(
                  updateArticleAction({ articleInput, slug: this.slug }),
            );
      }
}

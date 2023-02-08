import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleInputInterface } from "../../shared/types/article-input.interface";
import { Observable, Subscription } from "rxjs";
import { BackendErrorsInterface } from "../../shared/types/backendErrors.interface";
import {
      articleErrorSelector,
      isSubmittingSelector,
} from "../../create-article/store/selectors";
import { select, Store } from "@ngrx/store";
import { articleSelector } from "../../article/store/selectors";
import { getArticleAction } from "../../article/store/actions/get-article.actions";

@Component({
      selector: "mc-edit-article",
      templateUrl: "./edit-article.component.html",
      styleUrls: ["./edit-article.component.scss"],
})
export class EditArticleComponent implements OnInit, OnDestroy {
      public editableArticle!: ArticleInputInterface;
      public articleSubscription = new Subscription();
      public isSubmitting$ = new Observable<boolean>();
      public error$ = new Observable<BackendErrorsInterface | null>();
      constructor(
            private route: ActivatedRoute,
            private store: Store,
      ) {}

      ngOnInit(): void {
            this.initValues();
            this.getArticle();
      }

      getArticle(): void {
            this.store.dispatch(
                  getArticleAction({
                        slug: this.route.snapshot.paramMap.get("slug") || "",
                  }),
            );
            this.articleSubscription = this.store
                  .pipe(select(articleSelector))
                  .subscribe(article => {
                        if (article) {
                              this.editableArticle = {
                                    title: article.title,
                                    description: article.description,
                                    body: article.body,
                                    tagList: article.tagList,
                              };
                        }
                  });
      }

      initValues(): void {
            this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
            this.error$ = this.store.pipe(select(articleErrorSelector));
      }

      ngOnDestroy(): void {
            this.articleSubscription.unsubscribe();
      }

      saveEditArticle($event: ArticleInputInterface) {
        console.log($event)
      }
}

import { Component, OnDestroy, OnInit } from "@angular/core";
import { combineLatest, map, Observable, Subscription } from "rxjs";
import { ArticleInterface } from "../../shared/types/article.interface";
import { select, Store } from "@ngrx/store";
import {
      articleErrorSelector,
      articleSelector,
      isLoadingSelector,
} from "../store/selectors";
import {
      deleteArticleAction,
      getArticleAction,
} from "../store/actions/get-article.actions";
import { ActivatedRoute } from "@angular/router";
import { currentUserSelector } from "../../auth/store/selectors";

@Component({
      selector: "mc-article",
      templateUrl: "./article.component.html",
      styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit, OnDestroy {
      public article: ArticleInterface | null = null;
      public articleSubscription = new Subscription();
      // public isAuthorSubscription = new Subscription();
      public isLoading$ = new Observable<boolean>();
      public error$ = new Observable<string | null>();
      public slug: string | null = null;
      public isAuthor$ = new Observable<boolean>();
      constructor(
            private store: Store,
            private route: ActivatedRoute,
      ) {}
      ngOnInit(): void {
            this.initializeValues();
            this.fetchArticle();
      }

      initializeValues(): void {
            this.articleSubscription = this.store
                  .pipe(select(articleSelector))
                  .subscribe(article => (this.article = article));
            this.isLoading$ = this.store.pipe(select(isLoadingSelector));
            this.error$ = this.store.pipe(select(articleErrorSelector));

            this.slug = this.route.snapshot.paramMap.get("slug");

            this.isAuthor$ = combineLatest(
                  this.store.pipe(select(currentUserSelector)),
                  this.store.pipe(select(articleSelector)),
            ).pipe(
                  map(
                        ([currentUser, article]) =>
                              currentUser?.username ===
                              article?.author.username,
                  ),
            );
      }

      fetchArticle(): void {
            this.slug &&
                  this.store.dispatch(getArticleAction({ slug: this.slug }));
      }

      ngOnDestroy(): void {
            this.articleSubscription.unsubscribe();
      }

      deleteArticle(slug: string): void {
            this.store.dispatch(deleteArticleAction({ slug }));
      }
}

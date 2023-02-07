import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { ArticleInterface } from "../../shared/types/article.interface";
import { select, Store } from "@ngrx/store";
import {
      articleErrorSelector,
      articleSelector,
      isLoadingSelector,
} from "../store/selectors";
import { getArticleAction } from "../store/actions/get-article.actions";
import { ActivatedRoute } from "@angular/router";

@Component({
      selector: "mc-article",
      templateUrl: "./article.component.html",
      styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit, OnDestroy {
      public article: ArticleInterface | null = null;
      public articleSubscription = new Subscription();
      public isLoading$ = new Observable<boolean>();
      public error$ = new Observable<string | null>();
      public slug: string | null = null;
      constructor(private store: Store, private route: ActivatedRoute) {}
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
      }

      fetchArticle(): void {
            this.slug &&
                  this.store.dispatch(getArticleAction({ slug: this.slug }));
      }

      ngOnDestroy(): void {
            this.articleSubscription.unsubscribe();
      }
}

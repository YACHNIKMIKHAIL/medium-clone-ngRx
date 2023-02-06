import {
      Component,
      Input,
      OnChanges,
      OnDestroy,
      OnInit,
      SimpleChanges,
} from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute, Params, Router } from "@angular/router";
import * as queryString from "querystring";
import { environment } from "../../../environments/environment";
import { ArticleInterface } from "../../shared/types/article.interface";
import {
      articleErrorSelector,
      articleSelector,
      isLoadingSelector,
} from "../store/selectors";
import { getArticleAction } from "../store/actions/get-article.actions";

@Component({
      selector: "mc-article",
      templateUrl: "./article.component.html",
      styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit, OnDestroy, OnChanges {
      public article$ = new Observable<ArticleInterface | null>();
      public feedArticlesCount$ = new Observable<number | null>();
      public isLoading$ = new Observable<boolean>();
      public error$ = new Observable<string | null>();
      public limit = environment.limit;
      public baseUrl!: string;
      public currentPage: number | null = null;
      private queryParamsSubscription = new Subscription();
      @Input("apiUrl") apiUrlProps!: string;
      constructor(
            private store: Store,
            private router: Router,
            private route: ActivatedRoute,
      ) {}

      ngOnInit(): void {
            this.initializeValues();
            this.initializeListeners();
      }

      initializeValues(): void {
            this.article$ = this.store.pipe(select(articleSelector));
            // this.feedArticlesCount$ = this.store.pipe(
            //       select(feedArticlesCountSelector),
            // );
            this.isLoading$ = this.store.pipe(select(isLoadingSelector));
            this.error$ = this.store.pipe(select(articleErrorSelector));

            this.baseUrl = this.router.url.split("?")[0];
      }
      initializeListeners(): void {
            this.queryParamsSubscription = this.route.queryParams.subscribe(
                  (params: Params) => {
                        this.currentPage = Number(params["page"] || "1");

                        this.fetchArticle();
                  },
            );
      }

      private fetchArticle(): void {
            const offset =
                  this.currentPage &&
                  this.currentPage * this.limit - this.limit;
            const parsedUrl = queryString.parse(this.apiUrlProps);
            const turnedIntoAStringParams = queryString.stringify({
                  limit: this.limit,
                  offset,
                  ...parsedUrl,
            });

            const apiUrlWithParams = `${this.apiUrlProps}?${turnedIntoAStringParams}`;
            this.store.dispatch(getArticleAction({ slug: apiUrlWithParams }));
      }

      ngOnDestroy(): void {
            this.queryParamsSubscription.unsubscribe();
      }

      ngOnChanges(changes: SimpleChanges): void {
            const { previousValue, currentValue, firstChange } =
                  changes["apiUrlProps"];
            const isApiUrlChanged =
                  !firstChange && previousValue !== currentValue;
            if (isApiUrlChanged) {
                  this.fetchArticle();
            }
      }
}

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
import { ArticleInterface } from "../../../types/article.interface";
import {
      feedArticlesCountSelector,
      feedArticlesSelector,
      feedErrorSelector,
      isLoadingSelector,
} from "../store/selectors";
import { getFeedAction } from "../store/actions/get-feed.actions";
import { environment } from "../../../../../environments/environment";
import { ActivatedRoute, Params, Router } from "@angular/router";
import * as queryString from "querystring";

@Component({
      selector: "mc-feed",
      templateUrl: "./feed.component.html",
      styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
      public feedArticles$ = new Observable<ArticleInterface[]>();
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
            this.feedArticles$ = this.store.pipe(select(feedArticlesSelector));
            this.feedArticlesCount$ = this.store.pipe(
                  select(feedArticlesCountSelector),
            );
            this.isLoading$ = this.store.pipe(select(isLoadingSelector));
            this.error$ = this.store.pipe(select(feedErrorSelector));

            this.baseUrl = this.router.url.split("?")[0];
      }
      initializeListeners(): void {
            this.queryParamsSubscription = this.route.queryParams.subscribe(
                  (params: Params) => {
                        this.currentPage = Number(params["page"] || "1");

                        this.fetchFeed();
                  },
            );
      }

      private fetchFeed(): void {
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
            this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
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
                  this.fetchFeed();
            }
      }
}

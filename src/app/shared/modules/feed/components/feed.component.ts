import { Component, Input, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ArticleInterface } from "../../../types/article.interface";
import {
      feedArticlesCountSelector,
      feedArticlesSelector,
      feedErrorSelector,
      isLoadingSelector,
} from "../store/selectors";
import { getFeedAction } from "../store/actions/get-feed.actions";

@Component({
      selector: "mc-feed",
      templateUrl: "./feed.component.html",
      styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {
      public feed$ = new Observable<ArticleInterface[]>();
      public feedCount$ = new Observable<number>();
      public isLoading$ = new Observable<boolean>();
      public error$ = new Observable<string | null>();
      @Input("apiUrl") apiUrlProps!: string;
      constructor(private store: Store) {}

      ngOnInit(): void {
            this.fetchData();
            this.initializeValues();
      }

      initializeValues(): void {
            this.feed$ = this.store.pipe(select(feedArticlesSelector));
            this.feedCount$ = this.store.pipe(
                  select(feedArticlesCountSelector),
            );
            this.isLoading$ = this.store.pipe(select(isLoadingSelector));
            this.error$ = this.store.pipe(select(feedErrorSelector));
      }

      private fetchData(): void {
            this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
      }
}

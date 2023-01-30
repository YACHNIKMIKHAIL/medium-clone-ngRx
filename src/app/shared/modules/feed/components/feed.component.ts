import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ArticleInterface } from "../../../types/article.interface";
import { feedArticlesSelector } from "../store/selectors";

@Component({
      selector: "mc-feed",
      templateUrl: "./feed.component.html",
      styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {
      public feed$ = new Observable<ArticleInterface[]>();
      constructor(private store: Store) {}

      ngOnInit(): void {
            this.initializeValues();
      }

      initializeValues(): void {
            this.feed$ = this.store.pipe(select(feedArticlesSelector));
      }
}

import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { isLoggedInSelector } from "../../../auth/store/selectors";
import { Observable } from "rxjs";

@Component({
      selector: "mc-global-feed",
      templateUrl: "./global-feed.component.html",
      styleUrls: ["./global-feed.component.scss"],
})
export class GlobalFeedComponent implements OnInit {
      public url = "/articles"; //"/articles/feed?limit=10&off"
      public isLoggedIn$ = new Observable<boolean | null>();

      constructor(private store: Store) {}

      ngOnInit(): void {
            this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
      }
}

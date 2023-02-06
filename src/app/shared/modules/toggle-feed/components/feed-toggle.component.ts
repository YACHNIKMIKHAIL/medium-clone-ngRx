import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { isLoggedInSelector } from "../../../../auth/store/selectors";
import { select, Store } from "@ngrx/store";

@Component({
      selector: "mc-feed-toggle",
      templateUrl: "./feed-toggle.component.html",
      styleUrls: ["./feed-toggle.component.scss"],
})
export class FeedToggleComponent implements OnInit {
      @Input("tagName") tagNameProps: string | null = null;
      public isLoggedIn$ = new Observable<boolean | null>();
      constructor(private store: Store) {}

      ngOnInit(): void {
            this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
      }
}

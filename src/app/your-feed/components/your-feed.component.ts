import { Component } from "@angular/core";
import { GlobalFeedComponent } from "../../global-feed/components/global-feed/global-feed.component";
import { Store } from "@ngrx/store";

@Component({
      selector: "mc-your-feed",
      templateUrl: "./your-feed.component.html",
      styleUrls: ["./your-feed.component.scss"],
})
export class YourFeedComponent extends GlobalFeedComponent {
      public override url = "/articles/feed";
      constructor(store: Store) {
            super(store);
      }
}

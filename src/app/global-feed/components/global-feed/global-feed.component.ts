import { Component } from "@angular/core";

@Component({
      selector: "mc-global-feed",
      templateUrl: "./global-feed.component.html",
      styleUrls: ["./global-feed.component.scss"],
})
export class GlobalFeedComponent {
      public url = "/articles"; //"/articles/feed?limit=10&off"
}

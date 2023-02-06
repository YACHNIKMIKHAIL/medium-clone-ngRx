import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
      selector: "mc-popular-tag-feed",
      templateUrl: "./popular-tag-feed.component.html",
      styleUrls: ["./popular-tag-feed.component.scss"],
})
export class PopularTagFeedComponent implements OnInit {
      public url: string = "";
      public tagName: string = "";

      constructor(private route: ActivatedRoute) {}

      ngOnInit(): void {
            this.route.params.subscribe(params => {
                  this.tagName = params["slug"];
                  this.url = `/articles?tag=${this.tagName}`;
            });
      }
}

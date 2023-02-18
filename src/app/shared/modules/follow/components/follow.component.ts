import { Component, Input, OnInit } from "@angular/core";

@Component({
      selector: "mc-follow",
      templateUrl: "./follow.component.html",
      styleUrls: ["./follow.component.scss"],
})
export class FollowComponent implements OnInit {
      @Input("name") nameProps!: string;
      @Input("isFollowed") isFollowedProps!: boolean;
      constructor() {}

      ngOnInit(): void {}
}

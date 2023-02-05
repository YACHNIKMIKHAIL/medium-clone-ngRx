import { Component, Input } from "@angular/core";

@Component({
      selector: "mc-tagList",
      templateUrl: "./tagList.component.html",
      styleUrls: ["./tagList.component.scss"],
})
export class TagListComponent {
      @Input("tagList") tagListProps: string[] | null = null;
}

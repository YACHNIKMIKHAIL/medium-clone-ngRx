import { Component, Input } from "@angular/core";
import { PopularTagType } from "../../../types/popular-tag-type";

@Component({
      selector: "mc-tag-list",
      templateUrl: "./tagList.component.html",
      styleUrls: ["./tagList.component.scss"],
})
export class TagListComponent {
      @Input("tagList") tagListProps: PopularTagType[] | null = null;
}

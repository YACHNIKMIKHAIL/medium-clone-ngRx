import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PopularTagType } from "../../../types/popularTagType";
import { select, Store } from "@ngrx/store";
import {
      popularTagsLoadingSelector,
      popularTagsSelector,
} from "../store/selectors";

@Component({
      selector: "mc-popular-tags",
      templateUrl: "./popular-tags.component.html",
      styleUrls: ["./popular-tags.component.scss"],
})
export class PopularTagsComponent implements OnInit {
      public popularTags$ = new Observable<PopularTagType[] | null>();
      public isLoading$ = new Observable();
      constructor(private store: Store) {}

      ngOnInit(): void {
            this.initializeValues();
      }

      initializeValues(): void {
            this.popularTags$ = this.store.pipe(select(popularTagsSelector));
            this.isLoading$ = this.store.pipe(
                  select(popularTagsLoadingSelector),
            );
      }
}

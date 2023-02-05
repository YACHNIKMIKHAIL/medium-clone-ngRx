import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PopularTagType } from "../../../types/popularTagType";
import { select, Store } from "@ngrx/store";
import {
      popularTagsErrorSelector,
      popularTagsLoadingSelector,
      popularTagsSelector,
} from "../store/selectors";
import { getPopularTagsAction } from "../store/actions/get-popular-tags.action";

@Component({
      selector: "mc-popular-tags",
      templateUrl: "./popular-tags.component.html",
      styleUrls: ["./popular-tags.component.scss"],
})
export class PopularTagsComponent implements OnInit {
      public popularTags$ = new Observable<PopularTagType[] | null>();
      public error$ = new Observable<string | null>();
      public isLoading$ = new Observable();
      constructor(private store: Store) {}

      ngOnInit(): void {
            this.initializeValues();
            this.fetchPopularTags();
      }

      initializeValues(): void {
            this.popularTags$ = this.store.pipe(select(popularTagsSelector));
            this.error$ = this.store.pipe(select(popularTagsErrorSelector));
            this.isLoading$ = this.store.pipe(
                  select(popularTagsLoadingSelector),
            );
      }

      fetchPopularTags(): void {
            this.store.dispatch(getPopularTagsAction());
      }
}

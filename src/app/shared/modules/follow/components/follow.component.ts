import { Component, Input, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { followAction } from "../store/actions/follow.actions";
import { Observable } from "rxjs";
import { followIsLoadingSelector } from "../store/selectors";

@Component({
      selector: "mc-follow",
      templateUrl: "./follow.component.html",
      styleUrls: ["./follow.component.scss"],
})
export class FollowComponent implements OnInit {
      @Input("name") nameProps!: string;
      @Input("isFollowed") isFollowedProps!: boolean;
      isLoading$!: Observable<boolean>;
      constructor(private store: Store) {}

      ngOnInit(): void {
            this.isLoading$ = this.store.pipe(select(followIsLoadingSelector));
      }

      follow() {
            this.store.dispatch(
                  followAction({
                        name: this.nameProps,
                        isFollowed: this.isFollowedProps,
                  }),
            );
      }
}

import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import {
      currentUserSelector,
      isAnonymousSelector,
      isLoggedInSelector,
} from "../../../../auth/store/selectors";
import { Observable } from "rxjs";
import { CurrentUserInterface } from "../../../types/current-user.interface";
import { logoutAction } from "../../../../auth/store/actions/logout-current-user.actions";

@Component({
      selector: "mc-top-bar",
      templateUrl: "./top-bar.component.html",
      styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent implements OnInit {
      public isLoggedIn$ = new Observable<boolean | null>();
      public isAnonymous$ = new Observable<boolean>();
      public currentUser$ = new Observable<CurrentUserInterface | null>();

      constructor(private store: Store) {}

      ngOnInit(): void {
            this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
            this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
            this.currentUser$ = this.store.pipe(select(currentUserSelector));
      }

      logout() {
            this.store.dispatch(logoutAction());
      }
}

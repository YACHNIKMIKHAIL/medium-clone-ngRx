import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { select, Store } from "@ngrx/store";
import { disabledSlugSelector, isLoadingSelector } from "../store/selectors";
import {
      dislikeFavoriteAction,
      favoriteAction,
} from "../store/actions/favorite.actions";
import { isLoggedInSelector } from "../../../../auth/store/selectors";
import { Router } from "@angular/router";

@Component({
      selector: "mc-favorite",
      templateUrl: "./favorite.component.html",
      styleUrls: ["./favorite.component.scss"],
})
export class FavoriteComponent implements OnInit, OnDestroy {
      @Input("favoritesCount") favoritesCountProps!: number;
      @Input("isFavorite") isFavoriteProps!: boolean;
      @Input("text") textProps?: string;
      @Input("slug") slugProps!: string;
      isLoading$ = new Observable<boolean>();
      isLoggedIn: boolean | null = null;
      disabledSlug$ = new Observable<string | null>();
      isLoggedInSub = new Subscription();
      constructor(private store: Store, private router: Router) {}

      ngOnInit(): void {
            this.isLoading$ = this.store.pipe(select(isLoadingSelector));
            this.isLoggedInSub = this.store
                  .pipe(select(isLoggedInSelector))
                  .subscribe(log => (this.isLoggedIn = log));
            this.disabledSlug$ = this.store.pipe(select(disabledSlugSelector));
      }

      likeOrDislike() {
            const slug = this.slugProps;
            !this.isLoggedIn
                  ? this.router.navigate(["/login"])
                  : this.isFavoriteProps
                  ? this.store.dispatch(dislikeFavoriteAction({ slug }))
                  : this.store.dispatch(favoriteAction({ slug }));
      }

      ngOnDestroy(): void {
            this.isLoggedInSub.unsubscribe();
      }
}

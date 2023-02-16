import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { addToFavoritesAction } from "../store/actions/add-to-favorites.actions";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { isLoggedInSelector } from "../../../../auth/store/selectors";

@Component({
      selector: "mc-add-to-favorites",
      templateUrl: "./add-to-favorites.component.html",
      styleUrls: ["./add-to-favorites.component.scss"],
})
export class AddToFavoritesComponent implements OnInit, OnDestroy {
      @Input("isFavorited") isFavoritedProps!: boolean;
      @Input("articleSlug") articleSlugProps!: string;
      @Input("favoritesCount") favoritesCountProps!: number;
      @Input("text") textProps?: string;
      isFavorited!: boolean;
      articleSlug!: string;
      favoritesCount!: number;
      isLoggedIn!: boolean | null;
      isLoggedInSubs = new Subscription();
      text?: string;

      constructor(private store: Store, private router: Router) {}

      ngOnInit(): void {
            this.initValues();
      }

      handleLike() {
            if (!this.isLoggedIn) {
                  this.router.navigate(["/login"]);
            }

            const slug = this.articleSlug;
            const isFavorited = this.isFavorited;
            this.store.dispatch(addToFavoritesAction({ isFavorited, slug }));

            if (this.isFavorited) {
                  this.favoritesCount = this.favoritesCount - 1;
                  // this.store.dispatch(addToFavoritesAction({ isFavorited,slug }));
            } else {
                  this.favoritesCount = this.favoritesCount + 1;
                  // this.store.dispatch(addToFavoritesAction({isFavorited,slug }));
            }
            this.isFavorited = !this.isFavorited;
      }

      initValues(): void {
            this.isFavorited = this.isFavoritedProps;
            this.articleSlug = this.articleSlugProps;
            this.favoritesCount = this.favoritesCountProps;
            this.text = this.textProps;

            this.isLoggedInSubs = this.store
                  .pipe(select(isLoggedInSelector))
                  .subscribe(isLoggedIn => (this.isLoggedIn = isLoggedIn));
      }

      ngOnDestroy(): void {
            this.isLoggedInSubs.unsubscribe();
      }
}

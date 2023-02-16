import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { disabledSlugSelector, isLoadingSelector } from "../store/selectors";
import {
      dislikeFavoriteAction,
      favoriteAction,
} from "../store/actions/favorite.actions";

@Component({
      selector: "mc-favorite",
      templateUrl: "./favorite.component.html",
      styleUrls: ["./favorite.component.scss"],
})
export class FavoriteComponent implements OnInit {
      @Input("favoritesCount") favoritesCountProps!: number;
      @Input("isFavorite") isFavoriteProps!: boolean;
      @Input("slug") slugProps!: string;
      isLoading$ = new Observable<boolean>();
      disabledSlug$ = new Observable<string | null>();
      constructor(private store: Store) {}

      ngOnInit(): void {
            this.isLoading$ = this.store.pipe(select(isLoadingSelector));
            this.disabledSlug$ = this.store.pipe(select(disabledSlugSelector));
      }

      likeOrDislike() {
            const slug = this.slugProps;
            this.isFavoriteProps
                  ? this.store.dispatch(dislikeFavoriteAction({ slug }))
                  : this.store.dispatch(favoriteAction({ slug }));
      }
}

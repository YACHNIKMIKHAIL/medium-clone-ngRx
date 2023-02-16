import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import {
      addToFavoritesAction,
      removeFromFavoritesAction,
} from "../actions/add-to-favorites.actions";
import { AddToFavoritesService } from "../../services/add-to-favorites.service";

@Injectable()
export class AddToFavoritesEffect {
      addToFavorites$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(addToFavoritesAction),
                  switchMap(({ slug }) => {
                        return this.addToFavoritesService.addArticleToFavorite(
                              slug,
                        );
                  }),
            ),
      );
      removeFromFavorites$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(removeFromFavoritesAction),
                  switchMap(({ slug }) => {
                        return this.addToFavoritesService.removeArticleFromFavorite(
                              slug,
                        );
                  }),
            ),
      );

      constructor(
            private actions$: Actions,
            private addToFavoritesService: AddToFavoritesService,
      ) {}
}

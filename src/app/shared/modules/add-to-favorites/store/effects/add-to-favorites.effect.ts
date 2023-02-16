import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import {
      addToFavoritesAction,
      addToFavoritesFailureAction,
      addToFavoritesSuccessAction,
      removeFromFavoritesAction,
      removeFromFavoritesFailureAction,
      removeFromFavoritesSuccessAction,
} from "../actions/add-to-favorites.actions";
import { AddToFavoritesService } from "../../services/add-to-favorites.service";
import { ArticleInterface } from "../../../../types/article.interface";

@Injectable()
export class AddToFavoritesEffect {
      addToFavorites$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(addToFavoritesAction),
                  switchMap(({ slug }) => {
                        return this.addToFavoritesService
                              .addArticleToFavorite(slug)
                              .pipe(
                                    map((article: ArticleInterface) => {
                                          return addToFavoritesSuccessAction({
                                                article,
                                          });
                                    }),
                                    catchError(() => {
                                          return of(
                                                addToFavoritesFailureAction(),
                                          );
                                    }),
                              );
                  }),
            ),
      );
      removeFromFavorites$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(removeFromFavoritesAction),
                  switchMap(({ slug }) => {
                        return this.addToFavoritesService
                              .removeArticleFromFavorite(slug)
                              .pipe(
                                    map((article: ArticleInterface) => {
                                          return removeFromFavoritesSuccessAction(
                                                { article },
                                          );
                                    }),
                                    catchError(() => {
                                          return of(
                                                removeFromFavoritesFailureAction(),
                                          );
                                    }),
                              );
                  }),
            ),
      );

      constructor(
            private actions$: Actions,
            private addToFavoritesService: AddToFavoritesService,
      ) {}
}

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import {
      addToFavoritesAction,
      addToFavoritesFailureAction,
      addToFavoritesSuccessAction,
} from "../actions/add-to-favorites.actions";
import { AddToFavoritesService } from "../../services/add-to-favorites.service";
import { ArticleInterface } from "../../../../types/article.interface";

@Injectable()
export class AddToFavoritesEffect {
      private defineNeededMethod(
            isFavorited: boolean,
            slug: string,
      ): Observable<ArticleInterface> {
            return isFavorited
                  ? this.addToFavoritesService.removeArticleFromFavorite(slug)
                  : this.addToFavoritesService.addArticleToFavorite(slug);
      }
      addToFavorites$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(addToFavoritesAction),
                  switchMap(({ isFavorited, slug }) => {
                        return this.defineNeededMethod(isFavorited, slug).pipe(
                              map((article: ArticleInterface) => {
                                    return addToFavoritesSuccessAction({
                                          article,
                                    });
                              }),
                              catchError(() => {
                                    return of(addToFavoritesFailureAction());
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

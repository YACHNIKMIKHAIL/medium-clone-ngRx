import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import {
      dislikeFavoriteAction,
      dislikeFeedFailureAction,
      dislikeFeedSuccessAction,
      favoriteAction,
      likeFeedFailureAction,
      likeFeedSuccessAction,
} from "../actions/favorite.actions";
import { FavoriteService } from "../../services/favorite.service";
import { Injectable } from "@angular/core";

@Injectable()
export class favoriteFeedEffect {
      likeFeed$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(favoriteAction),
                  switchMap(({ slug }) => {
                        return this.favoriteService.likeFeed(slug).pipe(
                              map(() => {
                                    return likeFeedSuccessAction({ slug });
                              }),
                              catchError(() => {
                                    return of(likeFeedFailureAction());
                              }),
                        );
                  }),
            ),
      );

      dislikeFeed$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(dislikeFavoriteAction),
                  switchMap(({ slug }) => {
                        return this.favoriteService.dislikeFeed(slug).pipe(
                              map(() => {
                                    return dislikeFeedSuccessAction({ slug });
                              }),
                              catchError(() => {
                                    return of(dislikeFeedFailureAction());
                              }),
                        );
                  }),
            ),
      );

      constructor(
            private actions$: Actions,
            private favoriteService: FavoriteService,
      ) {}
}

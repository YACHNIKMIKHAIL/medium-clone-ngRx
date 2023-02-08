import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Injectable } from "@angular/core";
import {
      createArticleAction,
      createArticleFailureAction,
      createArticleSuccessAction,
} from "../actions/create-article.actions";
import { Router } from "@angular/router";
import { CreateArticleService } from "../../services/create-article.service";

@Injectable()
export class CreateArticleEffect {
      createArticle$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(createArticleAction),
                  switchMap(({ articleInput }) => {
                        return this.createArticleService
                              .createArticle(articleInput)
                              .pipe(
                                    map(article => {
                                          return createArticleSuccessAction({
                                                article,
                                          });
                                    }),
                                    catchError(errorResponse => {
                                          return of(
                                                createArticleFailureAction({
                                                      errors: errorResponse
                                                            .error.errors,
                                                }),
                                          );
                                    }),
                              );
                  }),
            ),
      );

      redirectAfterCreateArticle$ = createEffect(
            () =>
                  this.actions$.pipe(
                        ofType(createArticleSuccessAction),
                        tap(({ article }) => {
                              this.router.navigate(["/articles", article.slug]);
                        }),
                  ),
            { dispatch: false },
      );

      constructor(
            private actions$: Actions,
            private createArticleService: CreateArticleService,
            private router: Router,
      ) {}
}

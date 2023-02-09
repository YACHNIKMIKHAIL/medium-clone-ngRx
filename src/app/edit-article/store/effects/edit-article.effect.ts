import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Injectable } from "@angular/core";
import {
      updateArticleAction,
      updateArticleFailureAction,
      updateArticleSuccessAction,
} from "../actions/update-article.actions";
import { Router } from "@angular/router";
import { EditArticleService } from "../../services/edit-article.service";

@Injectable()
export class EditArticleEffect {
      updateArticle$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(updateArticleAction),
                  switchMap(({ articleInput, slug }) => {
                        return this.editArticleService
                              .updateArticle(articleInput, slug)
                              .pipe(
                                    map(article => {
                                          return updateArticleSuccessAction({
                                                article,
                                          });
                                    }),
                                    catchError(errorResponse => {
                                          return of(
                                                updateArticleFailureAction({
                                                      errors: errorResponse
                                                            .error.errors,
                                                }),
                                          );
                                    }),
                              );
                  }),
            ),
      );

      redirectAfterUpdateArticle$ = createEffect(
            () =>
                  this.actions$.pipe(
                        ofType(updateArticleSuccessAction),
                        tap(({ article }) => {
                              this.router.navigate(["/articles", article.slug]);
                        }),
                  ),
            { dispatch: false },
      );

      constructor(
            private actions$: Actions,
            private editArticleService: EditArticleService,
            private router: Router,
      ) {}
}

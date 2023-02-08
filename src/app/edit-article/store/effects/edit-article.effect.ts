import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Injectable } from "@angular/core";
import {
      editArticleAction,
      editArticleFailureAction,
      editArticleSuccessAction,
} from "../actions/edit-article.actions";
import { Router } from "@angular/router";
import { EditArticleService } from "../../services/edit-article.service";

@Injectable()
export class EditArticleEffect {
      editArticle$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(editArticleAction),
                  switchMap(({ articleInput, slug }) => {
                        return this.editArticleService
                              .editArticle(articleInput, slug)
                              .pipe(
                                    map(article => {
                                          return editArticleSuccessAction({
                                                article,
                                          });
                                    }),
                                    catchError(errorResponse => {
                                          return of(
                                                editArticleFailureAction({
                                                      errors: errorResponse
                                                            .error.errors,
                                                }),
                                          );
                                    }),
                              );
                  }),
            ),
      );

      redirectAfterEditArticle$ = createEffect(
            () =>
                  this.actions$.pipe(
                        ofType(editArticleSuccessAction),
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

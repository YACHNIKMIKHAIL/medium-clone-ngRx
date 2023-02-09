import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import {
      getEditableArticleAction,
      getEditableArticleFailureAction,
      getEditableArticleSuccessAction,
} from "../actions/get-article.actions";
import { ArticleService as SharedArticleService } from "../../../shared/services/article.service";

@Injectable()
export class GetArticleEffect {
      getEditableArticle$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(getEditableArticleAction),
                  switchMap(({ slug }) => {
                        return this.sharedArticleService.getArticle(slug).pipe(
                              map(article => {
                                    return getEditableArticleSuccessAction({
                                          article,
                                    });
                              }),
                              catchError(() => {
                                    return of(
                                          getEditableArticleFailureAction(),
                                    );
                              }),
                        );
                  }),
            ),
      );

      constructor(
            private actions$: Actions,
            private sharedArticleService: SharedArticleService,
      ) {}
}

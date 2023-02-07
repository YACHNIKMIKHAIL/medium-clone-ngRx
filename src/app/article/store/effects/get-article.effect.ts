import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticleService as SharedArticleService } from "../../../shared/services/article.service";
import { Injectable } from "@angular/core";
import {
      getArticleAction,
      getArticleFailureAction,
      getArticleSuccessAction,
} from "../actions/get-article.actions";
import { ArticleInterface } from "../../../shared/types/article.interface";

@Injectable()
export class GetArticleEffect {
      getArticle$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(getArticleAction),
                  switchMap(({ slug }) => {
                        return this.sharedArticleService.getArticle(slug).pipe(
                              map((article: ArticleInterface) => {
                                    return getArticleSuccessAction({ article });
                              }),
                              catchError(() => {
                                    return of(getArticleFailureAction());
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

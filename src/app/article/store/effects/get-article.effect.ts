import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticleService as SharedArticleService } from "../../../shared/services/article.service";
import { Injectable } from "@angular/core";
import {
      deleteArticleAction,
      deleteArticleFailureAction,
      deleteArticleSuccessAction,
      getArticleAction,
      getArticleFailureAction,
      getArticleSuccessAction,
} from "../actions/get-article.actions";
import { ArticleInterface } from "../../../shared/types/article.interface";
import { ArticleService } from "../../services/article.service";

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

      deleteArticle$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(deleteArticleAction),
                  switchMap(({ slug }) => {
                        return this.articleService.deleteArticle(slug).pipe(
                              map(() => {
                                    return deleteArticleSuccessAction();
                              }),
                              catchError(() => {
                                    return of(deleteArticleFailureAction());
                              }),
                        );
                  }),
            ),
      );

      constructor(
            private actions$: Actions,
            private sharedArticleService: SharedArticleService,
            private articleService: ArticleService,
      ) {}
}

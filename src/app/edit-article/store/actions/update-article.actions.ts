import { ArticleInputInterface } from "../../../shared/types/article-input.interface";
import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { BackendErrorsInterface } from "../../../shared/types/backendErrors.interface";
import { ArticleInterface } from "../../../shared/types/article.interface";

export const updateArticleAction = createAction(
      ActionTypes.UPDATE_ARTICLE,
      props<{ articleInput: ArticleInputInterface; slug: string }>(),
);

export const updateArticleSuccessAction = createAction(
      ActionTypes.UPDATE_ARTICLE_SUCCESS,
      props<{ article: ArticleInterface }>(),
);

export const updateArticleFailureAction = createAction(
      ActionTypes.UPDATE_ARTICLE_FAILURE,
      props<{ errors: BackendErrorsInterface }>(),
);

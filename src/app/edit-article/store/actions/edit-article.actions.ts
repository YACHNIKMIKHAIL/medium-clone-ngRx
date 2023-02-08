import { ArticleInputInterface } from "../../../shared/types/article-input.interface";
import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { BackendErrorsInterface } from "../../../shared/types/backendErrors.interface";
import { ArticleInterface } from "../../../shared/types/article.interface";

export const editArticleAction = createAction(
      ActionTypes.EDIT_ARTICLE,
      props<{ articleInput: ArticleInputInterface }>(),
);

export const editArticleSuccessAction = createAction(
      ActionTypes.EDIT_ARTICLE_SUCCESS,
      props<{ article: ArticleInterface }>(),
);

export const editArticleFailureAction = createAction(
      ActionTypes.EDIT_ARTICLE_FAILURE,
      props<{ errors: BackendErrorsInterface }>(),
);

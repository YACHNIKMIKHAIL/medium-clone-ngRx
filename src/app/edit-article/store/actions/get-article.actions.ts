import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { ArticleInterface } from "../../../shared/types/article.interface";

export const getEditableArticleAction = createAction(
      ActionTypes.GET_EDITABLE_ARTICLE,
      props<{ slug: string }>(),
);

export const getEditableArticleSuccessAction = createAction(
      ActionTypes.GET_EDITABLE_ARTICLE_SUCCESS,
      props<{ article: ArticleInterface }>(),
);

export const getEditableArticleFailureAction = createAction(
      ActionTypes.GET_EDITABLE_ARTICLE_FAILURE,
);

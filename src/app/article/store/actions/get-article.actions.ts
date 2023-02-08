import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { SaveArticleResponseInterface } from "../../../shared/types/save-article-response.interface";

export const getArticleAction = createAction(
      ActionTypes.GET_ARTICLE,
      props<{ slug: string }>(),
);

export const getArticleSuccessAction = createAction(
      ActionTypes.GET_ARTICLE_SUCCESS,
      props<SaveArticleResponseInterface>(),
);

export const getArticleFailureAction = createAction(
      ActionTypes.GET_ARTICLE_FAILURE,
);

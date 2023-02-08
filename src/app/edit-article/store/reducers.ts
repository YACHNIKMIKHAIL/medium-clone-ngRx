import { Action, createReducer, on } from "@ngrx/store";
import { routerNavigatedAction } from "@ngrx/router-store";
import {
      editArticleAction,
      editArticleFailureAction,
      editArticleSuccessAction,
} from "./actions/edit-article.actions";
import { EditArticleStateInterface } from "../types/edit-article-state.interface";

const initialState: EditArticleStateInterface = {
      isSubmitting: false,
      error: null,
      data: null,
};

export const editArticleReducer = createReducer(
      initialState,
      on(editArticleAction, (state, action) => ({
            ...state,
            data: action.articleInput,
      })),
      on(editArticleSuccessAction, state => {
            return {
                  ...state,
                  isSubmitting: false,
                  error: null,
            };
      }),
      on(editArticleFailureAction, (state, action) => ({
            ...state,
            isLoading: false,
            error: action.errors,
      })),
      on(routerNavigatedAction, (): EditArticleStateInterface => initialState),
);

export function reducer(
      state: EditArticleStateInterface,
      action: Action,
): EditArticleStateInterface {
      return editArticleReducer(state, action);
}

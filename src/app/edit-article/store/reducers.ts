import { Action, createReducer, on } from "@ngrx/store";
import { routerNavigatedAction } from "@ngrx/router-store";
import {
      updateArticleAction,
      updateArticleFailureAction,
      updateArticleSuccessAction,
} from "./actions/update-article.actions";
import { EditArticleStateInterface } from "../types/edit-article-state.interface";
import {
      getEditableArticleAction,
      getEditableArticleFailureAction,
      getEditableArticleSuccessAction,
} from "./actions/get-article.actions";

const initialState: EditArticleStateInterface = {
      isLoading: false,
      isSubmitting: false,
      error: null,
      data: null,
};

export const editArticleReducer = createReducer(
      initialState,
      on(updateArticleAction, state => ({
            ...state,
            isSubmitting: true,
      })),
      on(updateArticleSuccessAction, state => {
            return {
                  ...state,
                  isSubmitting: false,
                  error: null,
            };
      }),
      on(updateArticleFailureAction, (state, action) => ({
            ...state,
            isSubmitting: false,
            error: action.errors,
      })),
      on(routerNavigatedAction, (): EditArticleStateInterface => initialState),
      on(getEditableArticleAction, state => ({
            ...state,
            isLoading: true,
      })),
      on(getEditableArticleSuccessAction, (state, action) => {
            return {
                  ...state,
                  isLoading: false,
                  data: action.article,
                  error: null,
            };
      }),
      on(getEditableArticleFailureAction, state => {
            debugger;
            return {
                  ...state,
                  isLoading: false,
                  error: {
                        error: ["шо та упала на фече"],
                  },
            };
      }),
);

export function reducer(
      state: EditArticleStateInterface,
      action: Action,
): EditArticleStateInterface {
      return editArticleReducer(state, action);
}

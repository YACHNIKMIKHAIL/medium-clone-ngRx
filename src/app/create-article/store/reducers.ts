import { Action, createReducer, on } from "@ngrx/store";
import { routerNavigatedAction } from "@ngrx/router-store";
import {
      createArticleAction,
      createArticleFailureAction,
      createArticleSuccessAction,
} from "./actions/create-article.actions";
import { CreateArticleStateInterface } from "../types/create-article-state.interface";

const initialState: CreateArticleStateInterface = {
      isSubmitting: false,
      error: null,
};

export const saveArticleReducer = createReducer(
      initialState,
      on(createArticleAction, state => ({ ...state, isSubmitting: true })),
      on(createArticleSuccessAction, state => {
            return {
                  ...state,
                  isSubmitting: false,
                  error: null,
            };
      }),
      on(createArticleFailureAction, (state, action) => ({
            ...state,
            isLoading: false,
            error: action.errors,
      })),
      on(
            routerNavigatedAction,
            (): CreateArticleStateInterface => initialState,
      ),
);

export function reducer(
      state: CreateArticleStateInterface,
      action: Action,
): CreateArticleStateInterface {
      return saveArticleReducer(state, action);
}

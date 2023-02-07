import { Action, createReducer, on } from "@ngrx/store";
import { ArticleStateInterface } from "../types/article-state.interface";
import { routerNavigatedAction } from "@ngrx/router-store";
import {
      deleteArticleAction,
      deleteArticleFailureAction,
      deleteArticleSuccessAction,
      getArticleAction,
      getArticleFailureAction,
      getArticleSuccessAction,
} from "./actions/get-article.actions";

const initialState: ArticleStateInterface = {
      isLoading: true,
      error: null,
      data: null,
};

export const articleReducer = createReducer(
      initialState,
      on(getArticleAction, state => ({ ...state, isLoading: true })),
      on(getArticleSuccessAction, (state, action) => {
            return {
                  ...state,
                  isLoading: false,
                  error: null,
                  data: action.article,
            };
      }),
      on(getArticleFailureAction, state => ({
            ...state,
            isLoading: false,
            error: "Something with fetch article went wrong !",
            data: null,
      })),
      on(routerNavigatedAction, (): ArticleStateInterface => initialState),
      on(deleteArticleAction, state => ({ ...state, isLoading: true })),
      on(deleteArticleSuccessAction, (state) => {
            return {
                  ...state,
                  isLoading: false,
                  error: null,
                  data: null,
            };
      }),
      on(deleteArticleFailureAction, state => ({
            ...state,
            isLoading: false,
            error: "Something with fetch article went wrong !",
            data: null,
      })),
);

export function reducer(
      state: ArticleStateInterface,
      action: Action,
): ArticleStateInterface {
      return articleReducer(state, action);
}

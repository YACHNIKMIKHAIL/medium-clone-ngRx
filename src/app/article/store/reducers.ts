import { Action, createReducer, on } from "@ngrx/store";
import { ArticleStateInterface } from "../types/article-state.interface";
import { routerNavigatedAction } from "@ngrx/router-store";
import {
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
);

export function reducer(
      state: ArticleStateInterface,
      action: Action,
): ArticleStateInterface {
      return articleReducer(state, action);
}

import { Action, createReducer, on } from "@ngrx/store";
import { ArticleStateInterface } from "../types/article-state.interface";
import { routerNavigatedAction } from "@ngrx/router-store";
import {
      getArticleAction,
      getArticleFailureAction,
      getArticleSuccessAction,
} from "./actions/get-article.actions";
import {
      deleteArticleAction,
      deleteArticleFailureAction,
      deleteArticleSuccessAction,
} from "./actions/delete-article.actions";
import {
      dislikeFeedSuccessAction,
      likeFeedSuccessAction,
} from "../../shared/modules/favorite/store/actions/favorite.actions";
import { ArticleInterface } from "../../shared/types/article.interface";

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
      on(deleteArticleSuccessAction, state => {
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
      on(likeFeedSuccessAction, state => ({
            ...state,
            data: {
                  ...state.data,
                  favorited: true,
                  favoritesCount: state.data && state.data.favoritesCount + 1,
            } as ArticleInterface,
      })),
      on(dislikeFeedSuccessAction, state => ({
            ...state,
            data: {
                  ...state.data,
                  favorited: false,
                  favoritesCount: state.data && state.data.favoritesCount - 1,
            }  as ArticleInterface,
      })),
);

export function reducer(
      state: ArticleStateInterface,
      action: Action,
): ArticleStateInterface {
      return articleReducer(state, action);
}

import { Action, createReducer, on } from "@ngrx/store";
import {
      getFeedAction,
      getFeedFailureAction,
      getFeedSuccessAction,
} from "./actions/get-feed.actions";
import { FeedStateInterface } from "../types/feed-state.interface";
import { routerNavigatedAction } from "@ngrx/router-store";
import {
      dislikeFeedSuccessAction,
      likeFeedSuccessAction,
} from "../../favorite/store/actions/favorite.actions";
import { GetFeedResponseInterface } from "../types/get-feed-response.interface";

const initialState: FeedStateInterface = {
      isLoading: true,
      error: null,
      data: null,
};

export const feedReducer = createReducer(
      initialState,
      on(getFeedAction, state => ({ ...state, isLoading: true })),
      on(getFeedSuccessAction, (state, action) => ({
            ...state,
            isLoading: false,
            error: null,
            data: action.feed,
      })),
      on(getFeedFailureAction, state => ({
            ...state,
            isLoading: false,
            error: "Something went wrong !",
            data: null,
      })),
      on(likeFeedSuccessAction, (state, action) => ({
            ...state,
            data: {
                  ...state.data,
                  articles: state.data?.articles.map(article =>
                        article.slug === action.slug
                              ? {
                                      ...article,
                                      favorited: true,
                                      favoritesCount:
                                            article.favoritesCount + 1,
                                }
                              : article,
                  ),
            } as GetFeedResponseInterface | null,
      })),
      on(dislikeFeedSuccessAction, (state, action) => ({
            ...state,
            data: {
                  ...state.data,
                  articles: state.data?.articles.map(article =>
                        article.slug === action.slug
                              ? {
                                      ...article,
                                      favorited: false,
                                      favoritesCount:
                                            article.favoritesCount - 1,
                                }
                              : article,
                  ),
            } as GetFeedResponseInterface | null,
      })),
      on(routerNavigatedAction, (): FeedStateInterface => initialState),
);

export function reducer(
      state: FeedStateInterface,
      action: Action,
): FeedStateInterface {
      return feedReducer(state, action);
}

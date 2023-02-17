import { Action, createReducer, on } from "@ngrx/store";
import {
      getFeedAction,
      getFeedFailureAction,
      getFeedSuccessAction,
} from "./actions/get-feed.actions";
import { FeedStateInterface } from "../types/feed-state.interface";
import { routerNavigatedAction } from "@ngrx/router-store";

const initialState: FeedStateInterface = {
      isLoading: false,
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
      on(routerNavigatedAction, (): FeedStateInterface => initialState),
);

export function reducer(
      state: FeedStateInterface,
      action: Action,
): FeedStateInterface {
      return feedReducer(state, action);
}

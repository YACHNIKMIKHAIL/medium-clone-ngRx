import { Action, createReducer, on } from "@ngrx/store";
import {
      getFeedAction,
      getFeedFailureAction,
      getFeedSuccessAction,
} from "./actions/get-feed.actions";
import { FeedStateInterface } from "../types/feed-state.interface";

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
            error: "some error",
            data: null,
      })),
);

export function reducer(
      state: FeedStateInterface,
      action: Action,
): FeedStateInterface {
      return feedReducer(state, action);
}

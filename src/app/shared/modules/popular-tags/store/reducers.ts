import { Action, createReducer, on } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popular-tags-state.interface";
import {
      getPopularTagsAction,
      getPopularTagsFailureAction,
      getPopularTagsSuccessAction,
} from "./actions/get-popular-tags.action";

const initialState: PopularTagsStateInterface = {
      popularTags: null,
      isLoading: false,
};

export const popularTagsReducer = createReducer(
      initialState,
      on(getPopularTagsAction, state => ({ ...state, isLoading: true })),
      on(getPopularTagsSuccessAction, (state, action) => ({
            ...state,
            isLoading: false,
            popularTags: action.popularTags,
      })),
      on(getPopularTagsFailureAction, state => ({
            ...state,
            isLoading: false,
            popularTags: null,
      })),
);

export function reducer(
      state: PopularTagsStateInterface,
      action: Action,
): PopularTagsStateInterface {
      return popularTagsReducer(state, action);
}

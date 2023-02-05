import { Action, createReducer, on } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popular-tags-state.interface";
import {
      getPopularTagsAction,
      getPopularTagsFailureAction,
      getPopularTagsSuccessAction,
} from "./actions/get-popular-tags.action";

const initialState: PopularTagsStateInterface = {
      data: null,
      error: null,
      isLoading: false,
};

export const popularTagsReducer = createReducer(
      initialState,
      on(
            getPopularTagsAction,
            (state): PopularTagsStateInterface => ({
                  ...state,
                  isLoading: true,
            }),
      ),
      on(
            getPopularTagsSuccessAction,
            (state, action): PopularTagsStateInterface => ({
                  ...state,
                  isLoading: false,
                  data: action.popularTags,
            }),
      ),
      on(
            getPopularTagsFailureAction,
            (state, action): PopularTagsStateInterface => ({
                  ...state,
                  isLoading: false,
                  data: null,
                  error: action.error,
            }),
      ),
);

export function reducer(
      state: PopularTagsStateInterface,
      action: Action,
): PopularTagsStateInterface {
      return popularTagsReducer(state, action);
}

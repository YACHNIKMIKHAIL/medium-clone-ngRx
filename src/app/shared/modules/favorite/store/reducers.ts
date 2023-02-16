import { Action, createReducer, on } from "@ngrx/store";
import {
      dislikeFavoriteAction,
      dislikeFeedFailureAction,
      dislikeFeedSuccessAction,
      favoriteAction,
      likeFeedFailureAction,
      likeFeedSuccessAction,
} from "./actions/favorite.actions";
import { FavoriteStateInterface } from "../types/favorite-state.interface";

const initialState: FavoriteStateInterface = {
      isLoading: false,
      disabledSlug: null,
};

export const favoriteReducer = createReducer(
      initialState,
      on(favoriteAction, (state, action) => ({
            ...state,
            isLoading: true,
            disabledSlug: action.slug,
      })),
      on(likeFeedSuccessAction, () => initialState),
      on(likeFeedFailureAction, () => initialState),
      on(dislikeFavoriteAction, (state, action) => ({
            ...state,
            isLoading: true,
            disabledSlug: action.slug,
      })),
      on(dislikeFeedSuccessAction, () => initialState),
      on(dislikeFeedFailureAction, () => initialState),
);

export function reducer(
      state: FavoriteStateInterface,
      action: Action,
): FavoriteStateInterface {
      return favoriteReducer(state, action);
}

import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

export const addToFavoritesAction = createAction(
      ActionTypes.ADD_TO_FAVORITES,
      props<{ slug: string }>(),
);

export const removeFromFavoritesAction = createAction(
      ActionTypes.REMOVE_FROM_FAVORITES,
      props<{ slug: string }>(),
);

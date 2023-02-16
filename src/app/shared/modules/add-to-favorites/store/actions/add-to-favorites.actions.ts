import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { ArticleInterface } from "../../../../types/article.interface";

export const addToFavoritesAction = createAction(
      ActionTypes.ADD_TO_FAVORITES,
      props<{ isFavorited: boolean; slug: string }>(),
);
export const addToFavoritesSuccessAction = createAction(
      ActionTypes.ADD_TO_FAVORITES_SUCCESS,
      props<{ article: ArticleInterface }>(),
);
export const addToFavoritesFailureAction = createAction(
      ActionTypes.ADD_TO_FAVORITES_FAILURE,
);

// export const removeFromFavoritesAction = createAction(
//       ActionTypes.REMOVE_FROM_FAVORITES,
//       props<{ slug: string }>(),
// );

// export const removeFromFavoritesSuccessAction = createAction(
//       ActionTypes.REMOVE_FROM_FAVORITES_SUCCESS,
//       props<{ article: ArticleInterface }>(),
// );
// export const removeFromFavoritesFailureAction = createAction(
//       ActionTypes.REMOVE_FROM_FAVORITES_FAILURE,
// );

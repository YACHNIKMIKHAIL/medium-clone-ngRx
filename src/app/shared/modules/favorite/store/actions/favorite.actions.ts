import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

export const favoriteAction = createAction(
      ActionTypes.LIKE_FEED,
      props<{ slug: string }>(),
);

export const likeFeedSuccessAction = createAction(
      ActionTypes.LIKE_FEED_SUCCESS,
      props<{ slug: string }>(),
);

export const likeFeedFailureAction = createAction(
      ActionTypes.LIKE_FEED_FAILURE,
);

export const dislikeFavoriteAction = createAction(
      ActionTypes.DISLIKE_FEED,
      props<{ slug: string }>(),
);

export const dislikeFeedSuccessAction = createAction(
      ActionTypes.DISLIKE_FEED_SUCCESS,
      props<{ slug: string }>(),
);

export const dislikeFeedFailureAction = createAction(
      ActionTypes.DISLIKE_FEED_FAILURE,
);

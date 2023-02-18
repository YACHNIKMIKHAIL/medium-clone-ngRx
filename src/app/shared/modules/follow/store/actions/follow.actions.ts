import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { ProfileInterface } from "../../../../types/profile.interface";

export const followAction = createAction(
      ActionTypes.FOLLOW,
      props<{ name: string; isFollowed: boolean }>(),
);

export const followSuccessAction = createAction(
      ActionTypes.FOLLOW_SUCCESS,
      props<{ profile: ProfileInterface }>(),
);

export const followFailureAction = createAction(ActionTypes.FOLLOW_FAILURE);

import { createAction } from "@ngrx/store";
import { ActionTypes } from "../action-types";

export const logoutAction = createAction(ActionTypes.LOGOUT_CURRENT_USER);

export const logoutCurrentUserSuccessAction = createAction(
      ActionTypes.LOGOUT_CURRENT_USER_SUCCESS,
);

export const logoutCurrentUserFailureAction = createAction(
      ActionTypes.LOGOUT_CURRENT_USER_FAILURE,
);

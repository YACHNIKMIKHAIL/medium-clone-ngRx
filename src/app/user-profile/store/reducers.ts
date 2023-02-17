import { Action, createReducer, on } from "@ngrx/store";
import { UserProfileStateInterface } from "../types/user-profile-state.interface";
import {
      getUserProfileAction,
      getUserProfileFailureAction,
      getUserProfileSuccessAction,
} from "./actions/get-user-profile.actions";

const initialState: UserProfileStateInterface = {
      data: null,
      isLoading: false,
      error: null,
};

export const userProfileReducer = createReducer(
      initialState,
      on(
            getUserProfileAction,
            (state): UserProfileStateInterface => ({
                  ...state,
                  isLoading: true,
            }),
      ),
      on(
            getUserProfileSuccessAction,
            (state, action): UserProfileStateInterface => ({
                  ...state,
                  isLoading: false,
                  data: action.profile,
                  error: null,
            }),
      ),
      on(
            getUserProfileFailureAction,
            (state): UserProfileStateInterface => ({
                  ...state,
                  isLoading: false,
                  error: "some things bad was happen in back-end",
            }),
      ),
);

export function reducer(
      state: UserProfileStateInterface,
      action: Action,
): UserProfileStateInterface {
      return userProfileReducer(state, action);
}

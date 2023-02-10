import { SettingsStateInterface } from "../types/settings-state.interface";
import { Action, createReducer, on } from "@ngrx/store";
import {
      updateCurrentUserAction,
      updateCurrentUserFailureAction,
      updateCurrentUserSuccessAction,
} from "../../auth/store/actions/update-current-user.actions";

const initialState: SettingsStateInterface = {
      isSubmitting: false,
      validationErrors: null,
};

export const settingsReducer = createReducer(
      initialState,
      on(updateCurrentUserAction, state => ({
            ...state,
            isSubmitting: true,
      })),
      on(updateCurrentUserSuccessAction, state => {
            return {
                  ...state,
                  isSubmitting: false,
                  error: null,
            };
      }),
      on(updateCurrentUserFailureAction, (state, action) => ({
            ...state,
            isSubmitting: false,
            error: action.errors,
      })),
);

export function reducer(
      state: SettingsStateInterface,
      action: Action,
): SettingsStateInterface {
      return settingsReducer(state, action);
}

import { AuthStateInterface } from "../types/authState.interface";
import { Action, createReducer, on } from "@ngrx/store";
import {
      registerAction,
      registerFailureAction,
      registerSuccessAction,
} from "./actions/register.actions";
import {
      loginAction,
      loginFailureAction,
      loginSuccessAction,
} from "./actions/login.action";
import {
      getCurrentUserAction,
      getCurrentUserFailureAction,
      getCurrentUserSuccessAction,
} from "./actions/get-current-user.actions";
import { updateCurrentUserSuccessAction } from "./actions/update-current-user.actions";
import { logoutAction } from "./actions/sync.actions";

const initialState: AuthStateInterface = {
      isSubmitting: false,
      currentUser: null,
      isLoggedIn: null,
      validationErrors: null,
      isLoading: false,
};

export const authReducer = createReducer(
      initialState,
      on(
            registerAction,
            (state): AuthStateInterface => ({
                  ...state,
                  isSubmitting: true,
                  validationErrors: null,
            }),
      ),
      on(
            registerSuccessAction,
            (state, action): AuthStateInterface => ({
                  ...state,
                  isSubmitting: false,
                  currentUser: action.currentUser,
                  isLoggedIn: true,
            }),
      ),
      on(
            registerFailureAction,
            (state, action): AuthStateInterface => ({
                  ...state,
                  isSubmitting: false,
                  validationErrors: action.errors,
            }),
      ),
      on(loginAction, (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null,
      })),
      on(
            loginSuccessAction,
            (state, action): AuthStateInterface => ({
                  ...state,
                  isSubmitting: false,
                  currentUser: action.currentUser,
                  isLoggedIn: true,
            }),
      ),
      on(loginFailureAction, (state, action) => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors,
      })),
      on(getCurrentUserAction, state => ({
            ...state,
            isLoading: true,
      })),
      on(getCurrentUserSuccessAction, (state, action) => ({
            ...state,
            isLoggedIn: true,
            currentUser: action.currentUser,
            isLoading: false,
      })),
      on(getCurrentUserFailureAction, state => ({
            ...state,
            isLoggedIn: false,
            currentUser: null,
            isLoading: false,
      })),
      on(updateCurrentUserSuccessAction, (state, action) => ({
            ...state,
            currentUser: action.currentUserInput,
      })),
      on(logoutAction, () => ({ ...initialState, isLoggedIn: false })),
);

export function reducer(
      state: AuthStateInterface,
      action: Action,
): AuthStateInterface {
      return authReducer(state, action);
}

import { AuthStateInterface } from '../types/authState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
      registerAction,
      registerFailureAction,
      registerSuccessAction,
} from './actions/register.actions';
import {
      loginAction,
      loginFailureAction,
      loginSuccessAction,
} from './actions/login.action';
import {
      getCurrentUserFailureAction,
      getCurrentUserSuccessAction,
} from './actions/getCurrentUser.actions';

const initialState: AuthStateInterface = {
      isSubmitting: false,
      currentUser: null,
      isLoggedIn: null,
      validationErrors: null,
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
      on(getCurrentUserSuccessAction, (state, action) => ({
            ...state,
            isSubmitting: true,
            isLoggedIn: true,
            currentUser: action.currentUser,
      })),
      on(getCurrentUserFailureAction, (state) => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: false,
      })),
);

export function reducer(
      state: AuthStateInterface,
      action: Action,
): AuthStateInterface {
      return authReducer(state, action);
}

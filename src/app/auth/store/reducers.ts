import { AuthStateInterface } from '../types/authState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { registerAction } from './register.actions';

const initialState: AuthStateInterface = {
      isSubmitting: false,
};

export const authReducer = createReducer(
      initialState,
      on(
            registerAction,
            (state): AuthStateInterface => ({ ...state, isSubmitting: true }),
      ),
);

export function reducer(
      state: AuthStateInterface,
      action: Action,
): AuthStateInterface {
      return authReducer(state, action);
}

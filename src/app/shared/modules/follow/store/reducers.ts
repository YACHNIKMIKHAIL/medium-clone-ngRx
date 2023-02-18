import { Action, createReducer, on } from "@ngrx/store";
import { FollowStateInterface } from "./types/follow-state.interface";
import {
      followAction,
      followFailureAction,
      followSuccessAction,
} from "./actions/follow.actions";

const initialState: FollowStateInterface = {
      isLoading: false,
};

export const followReducer = createReducer(
      initialState,
      on(
            followAction,
            (state): FollowStateInterface => ({
                  ...state,
                  isLoading: true,
            }),
      ),
      on(
            followSuccessAction,
            (state): FollowStateInterface => ({
                  ...state,
                  isLoading: false,
            }),
      ),
      on(
            followFailureAction,
            (state): FollowStateInterface => ({
                  ...state,
                  isLoading: false,
            }),
      ),
);

export function reducer(
      state: FollowStateInterface,
      action: Action,
): FollowStateInterface {
      return followReducer(state, action);
}

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FollowStateInterface } from "./types/follow-state.interface";

export const followFeatureSelector =
      createFeatureSelector<FollowStateInterface>("Follow");

export const followIsLoadingSelector = createSelector(
      followFeatureSelector,
      (state: FollowStateInterface) => {
            return state.isLoading;
      },
);

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserProfileStateInterface } from "../types/user-profile-state.interface";

export const userProfileFeatureSelector =
      createFeatureSelector<UserProfileStateInterface>("userProfile");

export const isLoadingSelector = createSelector(
      userProfileFeatureSelector,
      (state: UserProfileStateInterface) => state.isLoading,
);

export const userProfileSelector = createSelector(
      userProfileFeatureSelector,
      (state: UserProfileStateInterface) => state.data,
);
export const errorSelector = createSelector(
      userProfileFeatureSelector,
      (state: UserProfileStateInterface) => state.error,
);

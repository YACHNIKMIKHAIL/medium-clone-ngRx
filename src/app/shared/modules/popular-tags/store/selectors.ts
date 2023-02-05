import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popular-tags-state.interface";

export const popularTagsFeatureSelector =
      createFeatureSelector<PopularTagsStateInterface>("popularTags");

export const popularTagsSelector = createSelector(
      popularTagsFeatureSelector,
      (popularTagsState: PopularTagsStateInterface) => {
            return popularTagsState.data;
      },
);

export const popularTagsLoadingSelector = createSelector(
      popularTagsFeatureSelector,
      (popularTagsState: PopularTagsStateInterface) => {
            return popularTagsState.isLoading;
      },
);

export const popularTagsErrorSelector = createSelector(
      popularTagsFeatureSelector,
      (popularTagsState: PopularTagsStateInterface) => {
            return popularTagsState.error;
      },
);

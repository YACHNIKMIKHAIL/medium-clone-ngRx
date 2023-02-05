import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popular-tags-state.interface";

export const popularTagsFeatureSelector =
      createFeatureSelector<PopularTagsStateInterface>("PopularTags");

export const popularTagsSelector = createSelector(
      popularTagsFeatureSelector,
      (popularTagsState: PopularTagsStateInterface) => {
            return popularTagsState.popularTags || [];
      },
);

export const popularTagsLoadingSelector = createSelector(
      popularTagsFeatureSelector,
      (popularTagsState: PopularTagsStateInterface) => {
            return popularTagsState.isLoading;
      },
);

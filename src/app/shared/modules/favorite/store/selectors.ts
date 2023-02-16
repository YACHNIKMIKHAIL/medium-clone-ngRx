import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoriteStateInterface } from "../types/favorite-state.interface";

export const favoriteFeatureSelector =
      createFeatureSelector<FavoriteStateInterface>("favorite");

export const isLoadingSelector = createSelector(
      favoriteFeatureSelector,
      (state: FavoriteStateInterface) => state.isLoading,
);

export const disabledSlugSelector = createSelector(
      favoriteFeatureSelector,
      (state: FavoriteStateInterface) => state.disabledSlug,
);

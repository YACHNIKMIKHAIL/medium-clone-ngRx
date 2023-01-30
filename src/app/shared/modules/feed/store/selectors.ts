import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GetFeedResponseInterface } from "../types/get-feed-response.interface";

export const feedFeatureSelector =
      createFeatureSelector<GetFeedResponseInterface>("feed");

export const feedArticlesSelector = createSelector(
      feedFeatureSelector,
      (feedState: GetFeedResponseInterface) => feedState.articles,
);

export const feedArticlesCountSelector = createSelector(
      feedFeatureSelector,
      (feedState: GetFeedResponseInterface) => feedState.articlesCount,
);

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeedStateInterface } from "../types/feed-state.interface";

export const feedFeatureSelector =
      createFeatureSelector<FeedStateInterface>("feed");

export const feedArticlesSelector = createSelector(
      feedFeatureSelector,
      (feedState: FeedStateInterface) => {
            return feedState.data?.articles || [];
      },
);

export const feedArticlesCountSelector = createSelector(
      feedFeatureSelector,
      (feedState: FeedStateInterface) => feedState.data?.articlesCount || 0,
);

export const isLoadingSelector = createSelector(
      feedFeatureSelector,
      (feedState: FeedStateInterface) => feedState.isLoading,
);

export const feedErrorSelector = createSelector(
      feedFeatureSelector,
      (feedState: FeedStateInterface) => feedState.error,
);

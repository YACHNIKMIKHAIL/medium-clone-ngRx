import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ArticleStateInterface } from "../types/article-state.interface";

export const articleFeatureSelector =
      createFeatureSelector<ArticleStateInterface>("article");

export const articleSelector = createSelector(
      articleFeatureSelector,
      (feedState: ArticleStateInterface) => {
            return feedState.data;
      },
);

export const isLoadingSelector = createSelector(
      articleFeatureSelector,
      (articleState: ArticleStateInterface) => articleState.isLoading,
);

export const articleErrorSelector = createSelector(
      articleFeatureSelector,
      (articleState: ArticleStateInterface) => articleState.error,
);

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EditArticleStateInterface } from "../types/edit-article-state.interface";

export const editArticleFeatureSelector =
      createFeatureSelector<EditArticleStateInterface>("editArticle");

export const getEditableArticle = createSelector(
      editArticleFeatureSelector,
      (createArticleState: EditArticleStateInterface) =>
            createArticleState.data,
);

export const isSubmittingSelector = createSelector(
      editArticleFeatureSelector,
      (createArticleState: EditArticleStateInterface) =>
            createArticleState.isSubmitting,
);

export const articleErrorSelector = createSelector(
      editArticleFeatureSelector,
      (createArticleState: EditArticleStateInterface) =>
            createArticleState.error,
);

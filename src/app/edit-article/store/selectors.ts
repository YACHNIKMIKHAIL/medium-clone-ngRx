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
      (editArticleState: EditArticleStateInterface) =>
            editArticleState.isSubmitting,
);

export const isLoadingSelector = createSelector(
      editArticleFeatureSelector,
      (editArticleState: EditArticleStateInterface) =>
            editArticleState.isLoading,
);
export const updateArticleErrorSelector = createSelector(
      editArticleFeatureSelector,
      (editArticleState: EditArticleStateInterface) => editArticleState.error,
);

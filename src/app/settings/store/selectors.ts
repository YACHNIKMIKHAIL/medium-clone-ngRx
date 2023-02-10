import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SettingsStateInterface } from "../types/settings-state.interface";

export const settingsFeatureSelector =
      createFeatureSelector<SettingsStateInterface>("editArticle");

export const settingsStateIsSubmittingSelector = createSelector(
      settingsFeatureSelector,
      (settingsState: SettingsStateInterface) => settingsState.isSubmitting,
);

export const settingsStateValidationErrorsSelector = createSelector(
      settingsFeatureSelector,
      (settingsState: SettingsStateInterface) => settingsState.validationErrors,
);

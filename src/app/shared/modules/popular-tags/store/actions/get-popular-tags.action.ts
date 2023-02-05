import { createAction, props } from "@ngrx/store";
import { GetPopularTagsActionTypes } from "../action-types";
import { PopularTagType } from "../../../../types/popularTagType";

export const getPopularTagsAction = createAction(
      GetPopularTagsActionTypes.GET_POPULAR_TAGS,
);

export const getPopularTagsSuccessAction = createAction(
      GetPopularTagsActionTypes.GET_POPULAR_TAGS_SUCCESS,
      props<{ popularTags: PopularTagType[] }>(),
);

export const getPopularTagsFailureAction = createAction(
      GetPopularTagsActionTypes.GET_POPULAR_TAGS_FAILURE,
      props<{ error: string }>(),
);

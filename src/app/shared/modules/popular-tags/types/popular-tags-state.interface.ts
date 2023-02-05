import { PopularTagType } from "../../../types/popularTagType";

export interface PopularTagsStateInterface {
      popularTags: PopularTagType[] | null;
      isLoading: boolean;
}

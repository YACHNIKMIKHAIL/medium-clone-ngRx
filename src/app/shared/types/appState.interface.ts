import { AuthStateInterface } from "../../auth/types/authState.interface";
import { FeedStateInterface } from "../modules/feed/types/feed-state.interface";
import { PopularTagsStateInterface } from "../modules/popular-tags/types/popular-tags-state.interface";

export interface AppStateInterface {
      auth: AuthStateInterface; //bla 234567
      feed: FeedStateInterface;
      popularTags: PopularTagsStateInterface;
}

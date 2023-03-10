import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YourFeedComponent } from "./components/your-feed.component";
import { RouterModule, Routes } from "@angular/router";
import { BannerModule } from "../shared/modules/banner/banner.module";
import { FeedToggleModule } from "../shared/modules/toggle-feed/feed-toggle.module";
import { FeedModule } from "../shared/modules/feed/feed.module";
import { PopularTagsModule } from "../shared/modules/popular-tags/popular-tags.module";

const routes: Routes = [
      {
            path: "feed",
            component: YourFeedComponent,
      },
];

@NgModule({
      declarations: [YourFeedComponent],
      imports: [
            CommonModule,
            RouterModule.forChild(routes),
            BannerModule,
            FeedToggleModule,
            FeedModule,
            PopularTagsModule,
      ],
})
export class YourFeedModule {}

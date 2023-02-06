import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeedToggleComponent } from "./components/feed-toggle.component";

@NgModule({
      declarations: [FeedToggleComponent],
      exports: [FeedToggleComponent],
      imports: [CommonModule],
})
export class FeedToggleModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeedToggleComponent } from "./components/feed-toggle.component";
import { RouterModule } from "@angular/router";

@NgModule({
      declarations: [FeedToggleComponent],
      exports: [FeedToggleComponent],
      imports: [CommonModule, RouterModule],
})
export class FeedToggleModule {}

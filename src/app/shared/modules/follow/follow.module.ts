import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FollowComponent } from "./components/follow.component";

@NgModule({
      declarations: [FollowComponent],
      exports: [FollowComponent],
      imports: [CommonModule],
})
export class FollowModule {}

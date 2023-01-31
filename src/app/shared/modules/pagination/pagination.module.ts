import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationComponent } from "./components/pagination.component";
import { RouterLinkActive, RouterModule } from "@angular/router";

@NgModule({
      declarations: [PaginationComponent],
      imports: [CommonModule, RouterLinkActive, RouterModule],
      exports: [PaginationComponent],
})
export class PaginationModule {}

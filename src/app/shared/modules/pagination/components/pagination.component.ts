import { Component, Input, OnInit } from "@angular/core";
import {
      interval,
      Observable,
      take,
      toArray,
} from "rxjs";

@Component({
      selector: "mc-pagination",
      templateUrl: "./pagination.component.html",
      styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
      @Input("totalCount") totalCountProps!: number | null;
      @Input("limit") limitProps = 10;
      @Input("currentPage") currentPageProps!: number;
      @Input("baseUrl") baseUrlProps!: string;
      public pageCount$ = new Observable();
      constructor() {}

      ngOnInit(): void {
            console.log("totalCountProps", this.totalCountProps);
            this.pageCount$ = interval(1).pipe(
                  take((this.totalCountProps as number) / this.limitProps),
                  toArray(),
            );
            this.pageCount$.subscribe(d => console.log(d));
      }
}

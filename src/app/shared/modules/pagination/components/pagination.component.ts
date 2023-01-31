import { Component, Input, OnInit } from "@angular/core";
import { UtilsService } from "../../../services/utils.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
      selector: "mc-pagination",
      templateUrl: "./pagination.component.html",
      styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
      @Input("totalCount") totalCountProps!: number | null;
      @Input("limit") limitProps = 10;
      @Input("currentPage") currentPageProps!: number | null;
      @Input("baseUrl") baseUrlProps!: string;
      public pagesCount!: number;
      public pages!: number[];
      private queryParamsSubscription = new Subscription();
      private visibleRangeLength = 5;
      constructor(
            private utilsService: UtilsService,
            private route: ActivatedRoute,
      ) {}

      ngOnInit(): void {
            if (this.totalCountProps) {
                  this.pagesCount = Math.ceil(
                        this.totalCountProps / this.limitProps,
                  );
            }
            this.initializeListeners();
            this.updateVisiblePages();
      }

      initializeListeners(): void {
            this.queryParamsSubscription = this.route.queryParams.subscribe(
                  (params: Params) => {
                        this.pages = this.utilsService.range(
                              Number(params["page"] || "1"),
                              this.pagesCount,
                        );
                        this.selectPage(Number(params["page"] || "1"));
                  },
            );
      }
      public selectPage(page: number): void {
            this.currentPageProps = page;
            this.updateVisiblePages();
      }
      private updateVisiblePages(): void {
            const length = Math.min(this.pagesCount, this.visibleRangeLength);
            const startIndex = Math.max(
                  Math.min(
                        this.currentPageProps
                              ? this.currentPageProps - Math.ceil(length / 2)
                              : 1,
                        this.totalCountProps
                              ? this.totalCountProps - length
                              : length,
                  ),
                  0,
            );

            const startI =
                  startIndex <= this.pagesCount - length
                        ? startIndex
                        : this.pagesCount - length;
            this.pages = Array.from(
                  new Array(length).keys(),
                  item => item + startI + 1,
            );
      }
}

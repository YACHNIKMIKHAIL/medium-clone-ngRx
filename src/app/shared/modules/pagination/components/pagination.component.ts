import { Component, Input, OnInit } from "@angular/core";
import { UtilsService } from "../../../services/utils.service";

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
      constructor(private utilsService: UtilsService) {}

      ngOnInit(): void {
            if (this.totalCountProps) {
                  this.pagesCount = Math.ceil(
                        this.totalCountProps / this.limitProps,
                  );
                  this.pages = this.utilsService.range(this.pagesCount);
            }
      }
}

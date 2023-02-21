import { TestBed } from "@angular/core/testing";

import { PopularTagsService } from "./popular-tags.service";
import {
      HttpClientTestingModule,
      HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "../../../../../environments/environment";

describe("PopularTagsService", () => {
      let service: PopularTagsService;
      let httpTestingController: HttpTestingController;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(PopularTagsService);
            httpTestingController = TestBed.get(HttpTestingController);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });

      it("getPopularTags", () => {
            service.getPopularTags().subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.length).toBe(6);
                  expect(resp[2]).toBe("3");
                  expect(resp[0]).toBe("1");
                  expect(resp[5]).toBe("6");
                  expect(resp[3]).toBe("4");
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/tags`,
            );
            expect(req.request.method).toBe("GET");

            req.flush({
                  tags: ["1", "2", "3", "4", "5", "6"],
            });
      });
});

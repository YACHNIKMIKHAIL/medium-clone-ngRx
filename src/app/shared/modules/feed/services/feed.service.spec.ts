import { TestBed } from "@angular/core/testing";

import { FeedService } from "./feed.service";
import {
      HttpClientTestingModule,
      HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "../../../../../environments/environment";

describe("FeedService", () => {
      let service: FeedService;
      let httpTestingController: HttpTestingController;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(FeedService);
            httpTestingController = TestBed.get(HttpTestingController);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });

      it("getFeed", () => {
            const reqUrl = "bla-bla-url";
            service.getFeed(reqUrl).subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.articles.length).toBe(0);
                  expect(resp.articlesCount).toBe(12);
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}${reqUrl}`,
            );
            expect(req.request.method).toBe("GET");

            req.flush({ articles: [], articlesCount: 12 });
      });
});

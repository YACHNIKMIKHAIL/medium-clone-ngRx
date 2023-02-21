import { TestBed } from "@angular/core/testing";

import { ArticleService } from "./article.service";
import {
      HttpClientTestingModule,
      HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "../../../environments/environment";

describe("FeedService", () => {
      let service: ArticleService;
      let httpTestingController: HttpTestingController;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(ArticleService);
            httpTestingController = TestBed.get(HttpTestingController);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });

      it("getArticle", () => {
            service.getArticle("requestDataSlug32").subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.slug).toBe("requestDataSlug32");
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/articles/requestDataSlug32`,
            );
            expect(req.request.method).toBe("GET");

            req.flush({
                  article: {
                        slug: "requestDataSlug32",
                  },
            });
      });
});

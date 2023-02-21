import { TestBed } from "@angular/core/testing";

import { ArticleService } from "./article.service";
import {
      HttpClientTestingModule,
      HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "../../../environments/environment";

describe("ArticleService", () => {
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

      it("should deleteArticle", () => {
            service.deleteArticle("slug").subscribe(() => {});
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/articles/slug`,
            );
            expect(req.request.method).toBe("DELETE");

            req.flush({});
            httpTestingController.verify();
      });
});

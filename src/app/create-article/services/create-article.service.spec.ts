import { TestBed } from "@angular/core/testing";

import { CreateArticleService } from "./create-article.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("CreateArticleService", () => {
      let service: CreateArticleService;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(CreateArticleService);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });
});

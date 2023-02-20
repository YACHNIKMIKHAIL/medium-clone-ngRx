import { TestBed } from "@angular/core/testing";

import { EditArticleService } from "./edit-article.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("CreateArticleService", () => {
      let service: EditArticleService;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(EditArticleService);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });
});

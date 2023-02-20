import { TestBed } from "@angular/core/testing";

import { FollowService } from "./follow.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ArticleService", () => {
      let service: FollowService;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(FollowService);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });
});

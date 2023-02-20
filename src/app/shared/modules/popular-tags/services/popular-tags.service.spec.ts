import { TestBed } from "@angular/core/testing";

import { PopularTagsService } from "./popular-tags.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("PopularTagsService", () => {
      let service: PopularTagsService;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(PopularTagsService);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });
});

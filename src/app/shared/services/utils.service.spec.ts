import { TestBed } from "@angular/core/testing";

import { UtilsService } from "./utils.service";

describe("UtilsService", () => {
      let service: UtilsService;

      beforeEach(() => {
            TestBed.configureTestingModule({});
            service = TestBed.inject(UtilsService);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });

      it("range", () => {
            const result1 = service.range(2, 6);
            const result2 = service.range(5, 10);
            const result3 = service.range(1, 2);

            expect(result1).toEqual([2, 3, 4, 5, 6, 7]);
            expect(result2).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
            expect(result3).toEqual([1, 2]);
      });
});

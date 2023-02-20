import { TestBed } from "@angular/core/testing";

import { AuthInterceptor } from "./auth-interceptor.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("AuthInterceptorService", () => {
      let service: AuthInterceptor;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
                  providers: [AuthInterceptor],
            });
            service = TestBed.inject(AuthInterceptor);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });
});

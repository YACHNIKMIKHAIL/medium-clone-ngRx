import { TestBed } from "@angular/core/testing";

import { UserProfileService } from "./user-profile.service";
import {
      HttpClientTestingModule,
      HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "../../../environments/environment";

describe("UserProfileService", () => {
      let service: UserProfileService;
      let httpTestingController: HttpTestingController;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(UserProfileService);
            httpTestingController = TestBed.get(HttpTestingController);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });

      it("should getUserProfile", () => {
            service.getUserProfile("requestDataSlug").subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.image).toBe("profile /image");
                  expect(resp.username).toBe("profile / name / abc");
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/profiles/requestDataSlug`,
            );
            expect(req.request.method).toBe("GET");

            req.flush({
                  profile: {
                        bio: null,
                        following: true,
                        image: "profile /image",
                        username: "profile / name / abc",
                  },
            });
      });
});

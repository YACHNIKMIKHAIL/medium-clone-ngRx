import { TestBed } from "@angular/core/testing";

import { FollowService } from "./follow.service";
import {
      HttpClientTestingModule,
      HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "../../../../../environments/environment";
import { GetUserProfileResponseInterface } from "../../../../user-profile/types/get-user-profile-response.interface";

describe("ArticleService", () => {
      let service: FollowService;
      let httpTestingController: HttpTestingController;
      let responseData: GetUserProfileResponseInterface;
      let userName: string;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(FollowService);
            httpTestingController = TestBed.get(HttpTestingController);
            responseData = {
                  profile: {
                        bio: null,
                        following: true,
                        image: "string",
                        username: "Grigori",
                  },
            };
            userName = "Grigori";
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });

      it("Follow", () => {
            service.follow(userName, false).subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.username).toBe("Grigori");
                  expect(resp.following).toBe(true);
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/profiles/${userName}/follow`,
            );
            expect(req.request.method).toBe("POST");

            req.flush(responseData);
      });

      it("Unfollow", () => {
            service.follow(userName, true).subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.username).toBe("Grigori");
                  expect(resp.following).toBe(true);
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/profiles/${userName}/follow`,
            );
            expect(req.request.method).toBe("DELETE");

            req.flush(responseData);
      });
});

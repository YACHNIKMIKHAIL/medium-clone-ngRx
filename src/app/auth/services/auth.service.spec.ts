import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import {
      HttpClientTestingModule,
      HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "../../../environments/environment.prod";

describe("AuthService", () => {
      let service: AuthService;
      let httpTestingController: HttpTestingController;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
                  providers: [AuthService],
            });
            service = TestBed.inject(AuthService);
            httpTestingController = TestBed.inject(HttpTestingController);
      });

      it("should be created", () => {
            const data = {
                  user: {
                        username: "string",
                        email: "string2",
                        password: "string44",
                  },
            };
            service.register(data).subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.email).toBe("string1");

                  const req = httpTestingController.expectOne(
                        `${environment.apiUrl}/usersss`,
                  );
                  expect(req.request.method).toBe("POST");
                  expect(req.request.body.user.username).toBe(
                        "data.user.username",
                  );

                  req.flush({
                        user: {
                              bio: "string",
                              email: "string3",
                              image: "string",
                              token: "string",
                              username: "string",
                        },
                  });
            });
      });
      it("should register", () => {
            pending();
      });
      it("should login", () => {
            pending();
      });
      it("should getCurrentUser", () => {
            pending();
      });
      it("should updateCurrentUser", () => {
            pending();
      });
      it("should logoutCurrentUser", () => {
            pending();
      });
});

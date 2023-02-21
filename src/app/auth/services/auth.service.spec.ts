import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import {
      HttpClientTestingModule,
      HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "../../../environments/environment.prod";
import { RegisterRequestInterface } from "../types/registerRequest.interface";

describe("AuthService", () => {
      let service: AuthService;
      let httpTestingController: HttpTestingController;
      let requestData: RegisterRequestInterface;
      let responseData: any;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
                  providers: [AuthService],
            });
            service = TestBed.inject(AuthService);
            httpTestingController = TestBed.inject(HttpTestingController);

            requestData = {
                  user: {
                        username: "Vasya",
                        email: "vasiya@dog.bla",
                        password: "string44",
                  },
            };

            responseData = {
                  user: {
                        bio: "string",
                        email: "vasiya@dog.bla",
                        image: "string",
                        token: "string",
                        username: "Vasya",
                  },
            };
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });

      it("should register", () => {
            service.register(requestData).subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.email).toBe(requestData.user.email);
                  expect(resp.username).toBe(requestData.user.username);
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/users`,
            );
            expect(req.request.method).toBe("POST");
            expect(req.request.body.user.username).toBe(
                  requestData.user.username,
            );

            req.flush(responseData);
      });
      it("should login", () => {
            const data = {
                  user: {
                        email: "string13",
                        password: "string123",
                  },
            };
            service.login(data).subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.username).toBe(requestData.user.username);
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/users/login`,
            );
            expect(req.request.method).toBe("POST");
            expect(req.request.body.user.email).toBe(data.user.email);

            req.flush(responseData);
      });
      it("should getCurrentUser", () => {
            service.getCurrentUser().subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.username).toBe(requestData.user.username);
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/user`,
            );
            expect(req.request.method).toBe("GET");

            req.flush(responseData);
      });
      it("should updateCurrentUser", () => {
            const data = {
                  ...responseData.user,
                  password: "string44",
            };
            service.updateCurrentUser(data).subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.email).toBe(data.email);
                  expect(resp.image).toBe(data.image);
                  expect(resp.token).toBe(data.token);
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/user`,
            );
            expect(req.request.method).toBe("PUT");
            expect(req.request.body.username).toBe(data.username);
            expect(req.request.body.image).toBe(data.image);

            req.flush(responseData.user);
      });
      it("should logoutCurrentUser", () => {
            service.logoutCurrentUser().subscribe(() => {});
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/user`,
            );
            expect(req.request.method).toBe("DELETE");

            req.flush(responseData.user);
      });
});

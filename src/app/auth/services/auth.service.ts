import { Injectable } from "@angular/core";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { CurrentUserInterface } from "../../shared/types/current-user.interface";
import { map, Observable, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.prod";
import { AuthResponseInterface } from "../types/authResponse.interface";
import { LoginRequestInterface } from "../types/loginRequest.interface";
import { CurrentUserInputInterface } from "../../shared/types/current-user-inpur.interface";

@Injectable()
export class AuthService {
      private url: string = environment.apiUrl;
      constructor(private http: HttpClient) {}
      register(
            data: RegisterRequestInterface,
      ): Observable<CurrentUserInterface> {
            return this.http
                  .post<AuthResponseInterface>(this.url + "/users", data)
                  .pipe(this.getUser);
      }

      login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
            return this.http
                  .post<AuthResponseInterface>(this.url + "/users/login", data)
                  .pipe(this.getUser);
      }

      private getUser(
            source$: Observable<AuthResponseInterface>,
      ): Observable<CurrentUserInterface> {
            return source$.pipe(map(response => response.user));
      }

      getCurrentUser(): Observable<CurrentUserInterface> {
            return this.http
                  .get<AuthResponseInterface>(this.url + "/user")
                  .pipe(this.getUser);
      }

      updateCurrentUser(
            currentUser: CurrentUserInputInterface,
      ): Observable<CurrentUserInterface> {
            return this.http.put(this.url + "/user", currentUser).pipe(
                  tap(m => console.log("tap", m)),
                  map(resp => resp as CurrentUserInterface),
            );
      }

      logoutCurrentUser(): Observable<CurrentUserInterface> {
            return this.http
                  .delete<AuthResponseInterface>(this.url + "/user")
                  .pipe(this.getUser);
      }
}

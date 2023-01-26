import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
      private url: string = environment.apiUrl;
      constructor(private http: HttpClient) {}
      register(
            data: RegisterRequestInterface,
      ): Observable<CurrentUserInterface> {
            return this.http
                  .post<AuthResponseInterface>(this.url + '/users', data)
                  .pipe(this.getUser);
      }

      login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
            return this.http
                  .post<AuthResponseInterface>(this.url + '/users/login', data)
                  .pipe(this.getUser);
      }

      private getUser(
            source$: Observable<AuthResponseInterface>,
      ): Observable<CurrentUserInterface> {
            return source$.pipe(map(response => response.user));
      }
}

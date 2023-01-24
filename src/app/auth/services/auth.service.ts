import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/currentUser.interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { AuthResponseInterface } from '../types/authResponse.interface';

@Injectable()
export class AuthService {
      constructor(private http: HttpClient) {}
      register(
            data: RegisterRequestInterface,
      ): Observable<CurrentUserInterface> {
            return this.http
                  .post<AuthResponseInterface>(
                        environment.apiUrl + '/user',
                        data,
                  )
                  .pipe(map(response => response.user));
      }
}

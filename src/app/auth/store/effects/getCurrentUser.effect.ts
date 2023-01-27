import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
      registerFailureAction,
      registerSuccessAction,
} from '../actions/register.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { Router } from '@angular/router';
import { getCurrentUserAction } from '../actions/getCurrentUser.actions';

export class GetCurrentUserEffect {
      fetchUser$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(getCurrentUserAction),
                  switchMap(() => {
                        return this.authService.getCurrentUser().pipe(
                              map((currentUser: CurrentUserInterface) => {
                                    this.persistenceService.set(
                                          'accessToken',
                                          currentUser.token,
                                    );
                                    return registerSuccessAction({
                                          currentUser,
                                    });
                              }),
                              catchError((errorResponse: HttpErrorResponse) => {
                                    return of(
                                          registerFailureAction({
                                                errors: errorResponse.error
                                                      .errors,
                                          }),
                                    );
                              }),
                        );
                  }),
            ),
      );

      redirectAfterSubmit$ = createEffect(
            () =>
                  this.actions$.pipe(
                        ofType(registerSuccessAction),
                        tap(() => {
                              this.router.navigateByUrl('/');
                        }),
                  ),
            { dispatch: false },
      );
      constructor(
            private actions$: Actions,
            private authService: AuthService,
            private persistenceService: PersistenceService,
            private router: Router,
      ) {}
}

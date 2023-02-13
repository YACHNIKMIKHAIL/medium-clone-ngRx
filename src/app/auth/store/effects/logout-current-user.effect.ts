import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { PersistenceService } from "../../../shared/services/persistence.service";
import { Injectable } from "@angular/core";
import {
      logoutAction,
      logoutCurrentUserFailureAction,
      logoutCurrentUserSuccessAction,
} from "../actions/logout-current-user.actions";

@Injectable()
export class LogoutCurrentUserEffect {
      logoutCurrentUser$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(logoutAction),
                  switchMap(() => {
                        this.persistenceService.set("accessToken", null);

                        return this.authService.logoutCurrentUser().pipe(
                              map(() => {
                                    return logoutCurrentUserSuccessAction();
                              }),
                              catchError(() => {
                                    return of(logoutCurrentUserFailureAction());
                              }),
                        );
                  }),
            ),
      );

      constructor(
            private actions$: Actions,
            private authService: AuthService,
            private persistenceService: PersistenceService,
      ) {}
}

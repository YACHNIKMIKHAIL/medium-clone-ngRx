import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { Injectable } from "@angular/core";
import {
      updateCurrentUserAction,
      updateCurrentUserFailureAction,
      updateCurrentUserSuccessAction,
} from "../actions/update-current-user.actions";

@Injectable()
export class UpdateCurrentUserEffect {
      updateCurrentUser$ = createEffect(() => {
            return this.actions$.pipe(
                  ofType(updateCurrentUserAction),
                  switchMap(({ currentUserInput }) => {
                        return this.authService
                              .updateCurrentUser(currentUserInput)
                              .pipe(
                                    map(currentUserInput =>
                                          updateCurrentUserSuccessAction({
                                                currentUserInput,
                                          }),
                                    ),
                                    catchError(errorResponse =>
                                          of(
                                                updateCurrentUserFailureAction({
                                                      errors: errorResponse
                                                            .error.errors,
                                                }),
                                          ),
                                    ),
                              );
                        // if (!token) {
                        //   return of(updateCurrentUserFailureAction());
                        // }
                        // return this.authService.getCurrentUser().pipe(
                        //   map((currentUser: CurrentUserInterface) => {
                        //     return getCurrentUserSuccessAction({
                        //       currentUser,
                        //     });
                  }),
                  catchError(err => {
                        return of(updateCurrentUserFailureAction(err));
                  }),
                  // );
                  // }),
            );
      });

      constructor(
            private actions$: Actions,
            private authService: AuthService,
      ) {}
}

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import {
      getUserProfileAction,
      getUserProfileFailureAction,
      getUserProfileSuccessAction,
} from "../actions/get-user-profile.actions";
import { Injectable } from "@angular/core";
import { UserProfileService } from "../../services/user-profile.service";
import { ProfileInterface } from "../../../shared/types/profile.interface";

@Injectable()
export class GetUserProfileEffect {
      getUserProfile$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(getUserProfileAction),
                  switchMap(({ slug }) => {
                        return this.userProfileService
                              .getUserProfile(slug)
                              .pipe(
                                    map((profile: ProfileInterface) => {
                                          return getUserProfileSuccessAction({
                                                profile,
                                          });
                                    }),
                                    catchError(() => {
                                          return of(
                                                getUserProfileFailureAction(),
                                          );
                                    }),
                              );
                  }),
            ),
      );

      constructor(
            private actions$: Actions,
            private userProfileService: UserProfileService,
      ) {}
}

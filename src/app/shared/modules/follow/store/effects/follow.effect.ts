import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import {
      followAction,
      followFailureAction,
      followSuccessAction,
} from "../actions/follow.actions";
import { Injectable } from "@angular/core";
import { FollowService } from "../../services/follow.service";
import { ProfileInterface } from "../../../../types/profile.interface";

@Injectable()
export class FollowEffect {
      follow$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(followAction),
                  switchMap(({ name, isFollowed }) => {
                        return this.followService.follow(name, isFollowed).pipe(
                              map((profile: ProfileInterface) => {
                                    return followSuccessAction({ profile });
                              }),
                              catchError(() => {
                                    return of(followFailureAction());
                              }),
                        );
                  }),
            ),
      );

      constructor(
            private actions$: Actions,
            private followService: FollowService,
      ) {}
}

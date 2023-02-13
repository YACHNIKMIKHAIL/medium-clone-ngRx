import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { PersistenceService } from "../../../shared/services/persistence.service";
import { Injectable } from "@angular/core";
import { logoutAction } from "../actions/sync.actions";
import { Router } from "@angular/router";

@Injectable()
export class LogoutCurrentUserEffect {
      logoutCurrentUser$ = createEffect(
            () =>
                  this.actions$.pipe(
                        ofType(logoutAction),
                        tap(() => {
                              this.persistenceService.set("accessToken", "");
                                    this.router.navigate(["/"]);
                        }),
                  ),
            { dispatch: false },
      );

      constructor(
            private actions$: Actions,
            private router: Router,
            private persistenceService: PersistenceService,
      ) {}
}

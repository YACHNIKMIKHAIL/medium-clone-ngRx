import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import {
      getPopularTagsAction,
      getPopularTagsFailureAction,
      getPopularTagsSuccessAction,
} from "../actions/get-popular-tags.action";
import { PopularTagsService } from "../../services/popular-tags.service";

@Injectable()
export class GetPopularTagsEffect {
      getPopularTagsEffect$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(getPopularTagsAction),
                  switchMap(() => {
                        console.log("switchMap");
                        return this.popularTagsService.getPopularTags().pipe(
                              map((popularTags: any) => {
                                    return getPopularTagsSuccessAction({
                                          popularTags,
                                    });
                              }),
                              catchError(() => {
                                    return of(getPopularTagsFailureAction());
                              }),
                        );
                  }),
            ),
      );

      constructor(
            private actions$: Actions,
            private popularTagsService: PopularTagsService,
      ) {}
}

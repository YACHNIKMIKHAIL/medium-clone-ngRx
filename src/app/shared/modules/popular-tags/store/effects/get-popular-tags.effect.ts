import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import {
      getPopularTagsAction,
      getPopularTagsFailureAction,
      getPopularTagsSuccessAction,
} from "../actions/get-popular-tags.action";
import { PopularTagsService } from "../../services/popular-tags.service";
import { PopularTagType } from "../../../../types/popular-tag-type";

@Injectable()
export class GetPopularTagsEffect {
      getPopularTagsEffect$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(getPopularTagsAction),
                  switchMap(() => {
                        return this.popularTagsService.getPopularTags().pipe(
                              map((popularTags: PopularTagType[]) => {
                                    return getPopularTagsSuccessAction({
                                          popularTags,
                                    });
                              }),
                              catchError(() => {
                                    return of(
                                          getPopularTagsFailureAction({
                                                error: "get tags error",
                                          }),
                                    );
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

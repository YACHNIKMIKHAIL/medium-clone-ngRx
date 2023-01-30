import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import {
      getFeedAction,
      getFeedFailureAction,
      getFeedSuccessAction,
} from "../actions/get-feed.actions";
import { FeedService } from "../../services/feed.service";
import { GetFeedResponseInterface } from "../../types/get-feed-response.interface";
import { Injectable } from "@angular/core";

@Injectable()
export class GetFeedEffect {
      getFeed$ = createEffect(() =>
            this.actions$.pipe(
                  ofType(getFeedAction),
                  switchMap(({ url }) => {
                        return this.feedService.getFeed(url).pipe(
                              map((feed: GetFeedResponseInterface) => {
                                    return getFeedSuccessAction({ feed });
                              }),
                              catchError(() => {
                                    return of(getFeedFailureAction());
                              }),
                        );
                  }),
            ),
      );

      constructor(
            private actions$: Actions,
            private feedService: FeedService,
      ) {}
}

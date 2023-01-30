import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { GetFeedResponseInterface } from "../types/get-feed-response.interface";

@Injectable({
      providedIn: "root",
})
export class FeedService {
      constructor() {}

      getFeed(url: string): Observable<GetFeedResponseInterface> {
            return of({} as GetFeedResponseInterface);
      }
}

import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PopularTagType } from "../../../types/popularTagType";

@Injectable({
      providedIn: "root",
})
export class PopularTagsService {
      constructor(private http: HttpClient) {}

      getPopularTags(): Observable<PopularTagType[]> {
            debugger;
            console.log("PopularTagsService");
            return of([]);
      }
}

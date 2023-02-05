import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PopularTagType } from "../../../types/popularTagType";
import { GetPopularTagsResponseType } from "../types/get-popular-tags-response-type";
import { environment } from "../../../../../environments/environment";

@Injectable({
      providedIn: "root",
})
export class PopularTagsService {
      constructor(private http: HttpClient) {}

      getPopularTags(): Observable<PopularTagType[]> {
            return this.http
                  .get<GetPopularTagsResponseType>(environment.apiUrl + "/tags")
                  .pipe(map(response => response.tags as PopularTagType[]));
      }
}

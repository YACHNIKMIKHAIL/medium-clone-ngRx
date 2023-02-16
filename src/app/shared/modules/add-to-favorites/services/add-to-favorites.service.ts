import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { GetArticleResponseInterface } from "../../../types/get-article-response.interface";

@Injectable({
      providedIn: "root",
})
export class AddToFavoritesService {
      constructor(private http: HttpClient) {}

      addArticleToFavorite(slug: string): Observable<any> {
            return this.http.post<GetArticleResponseInterface>(
                  `${environment.apiUrl}/articles/${slug}/favorite`,
                  {},
            );
      }
      removeArticleFromFavorite(slug: string): Observable<any> {
            return this.http.delete<GetArticleResponseInterface>(
                  `${environment.apiUrl}/articles/${slug}/favorite`,
            );
      }
}

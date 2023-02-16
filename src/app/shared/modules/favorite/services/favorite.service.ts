import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { GetArticleResponseInterface } from "../../../types/get-article-response.interface";
import { ArticleInterface } from "../../../types/article.interface";

@Injectable({
      providedIn: "root",
})
export class FavoriteService {
      constructor(private http: HttpClient) {}

      likeFeed(slug: string): Observable<ArticleInterface> {
            return this.http
                  .post<GetArticleResponseInterface>(
                        `${environment.apiUrl}/articles/${slug}/favorite`,
                        {},
                  )
                  .pipe(map(resp => resp.article));
      }

      dislikeFeed(slug: string): Observable<ArticleInterface> {
            return this.http
                  .delete<GetArticleResponseInterface>(
                        `${environment.apiUrl}/articles/${slug}/favorite`,
                  )
                  .pipe(map(resp => resp.article));
      }
}

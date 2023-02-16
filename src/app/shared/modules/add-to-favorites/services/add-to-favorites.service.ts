import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { GetArticleResponseInterface } from "../../../types/get-article-response.interface";
import { ArticleInterface } from "../../../types/article.interface";

@Injectable({
      providedIn: "root",
})
export class AddToFavoritesService {
      constructor(private http: HttpClient) {}
      getUrl(slug: string): string {
            return `${environment.apiUrl}/articles/${slug}/favorite`;
      }

      addArticleToFavorite(slug: string): Observable<ArticleInterface> {
            return this.http
                  .post<GetArticleResponseInterface>(this.getUrl(slug), {})
                  .pipe(map(resp => resp.article));
      }
      removeArticleFromFavorite(slug: string): Observable<ArticleInterface> {
            return this.http
                  .delete<GetArticleResponseInterface>(this.getUrl(slug))
                  .pipe(map(resp => resp.article));
      }
}

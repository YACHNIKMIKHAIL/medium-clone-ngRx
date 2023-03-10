import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ArticleInputInterface } from "../../shared/types/article-input.interface";
import { map, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ArticleInterface } from "../../shared/types/article.interface";
import { SaveArticleResponseInterface } from "../../shared/types/save-article-response.interface";

@Injectable({
      providedIn: "root",
})
export class CreateArticleService {
      constructor(private http: HttpClient) {}

      createArticle(
            articleInput: ArticleInputInterface,
      ): Observable<ArticleInterface> {
            return this.http
                  .post<SaveArticleResponseInterface>(
                        `${environment.apiUrl}/articles`,
                        { article: articleInput },
                  )
                  .pipe(map(response => response.article));
      }
}

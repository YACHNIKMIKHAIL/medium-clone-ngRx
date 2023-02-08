import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ArticleInputInterface } from "../../shared/types/article-input.interface";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
      providedIn: "root",
})
export class CreateArticleService {
      constructor(private http: HttpClient) {}

      createArticle(article: ArticleInputInterface): Observable<any> {
            //https://api.realworld.io/api/articles
            // const ar={
            //   body: "vdfvdfv",
            //   descriptio: "vdsfvsdfv",
            //   tagLis: [],
            //   title: "sfvsdf"
            // }

            return this.http.post(`${environment.apiUrl}/articles`, article);
      }
}

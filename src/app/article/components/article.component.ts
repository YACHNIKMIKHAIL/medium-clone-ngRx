import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ArticleInterface } from "../../shared/types/article.interface";
import { select, Store } from "@ngrx/store";
import {
      articleErrorSelector,
      articleSelector,
      isLoadingSelector,
} from "../store/selectors";
import { getArticleAction } from "../store/actions/get-article.actions";
import { ActivatedRoute } from "@angular/router";

@Component({
      selector: "mc-article",
      templateUrl: "./article.component.html",
      styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
      public article$ = new Observable<ArticleInterface | null>();
      public isLoading$ = new Observable<boolean>();
      public error$ = new Observable<string | null>();
      constructor(private store: Store, private route: ActivatedRoute) {}
      ngOnInit(): void {
            let slug = "";
            this.route.params.subscribe(params => {
                  slug = params["slug"];
                  this.store.dispatch(getArticleAction({ slug }));
            });

            this.initValues();
      }

      initValues(): void {
            this.article$ = this.store.pipe(select(articleSelector));
            this.isLoading$ = this.store.pipe(select(isLoadingSelector));
            this.error$ = this.store.pipe(select(articleErrorSelector));
      }
}

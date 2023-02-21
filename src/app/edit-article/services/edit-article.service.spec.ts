import { TestBed } from "@angular/core/testing";

import { EditArticleService } from "./edit-article.service";
import {
      HttpClientTestingModule,
      HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "../../../environments/environment.prod";

describe("CreateArticleService", () => {
      let service: EditArticleService;
      let httpTestingController: HttpTestingController;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(EditArticleService);
            httpTestingController = TestBed.inject(HttpTestingController);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });

      it("should updateArticle", () => {
            const data = {
                  title: "Article title",
                  description: "Article description",
                  body: "Article body/body=body9body",
                  tagList: ["tag", "slug", "flag"],
            };
            service.updateArticle(data, "slug3").subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.body).toBe(data.body);
                  expect(resp.tagList.length).toBe(data.tagList.length);
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/articles/slug3`,
            );
            expect(req.request.method).toBe("PUT");
            expect(req.request.body.article.body).toBe(data.body);
            expect(req.request.body.article.tagList[0]).toBe(data.tagList[0]);

            req.flush({
                  article: {
                        author: {},
                        createdAt: "string",
                        favorited: true,
                        favoritesCount: 2,
                        slug: "string",
                        updatedAt: "string",
                        ...data,
                  },
            });
      });
});

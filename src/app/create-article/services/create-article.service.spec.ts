import { TestBed } from "@angular/core/testing";

import { CreateArticleService } from "./create-article.service";
import {
      HttpClientTestingModule,
      HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "../../../environments/environment.prod";

describe("CreateArticleService", () => {
      let service: CreateArticleService;
      let httpTestingController: HttpTestingController;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(CreateArticleService);
            httpTestingController = TestBed.inject(HttpTestingController);
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });

      it("createArticle method", () => {
            const data = {
                  title: "Article title",
                  description: "Article description",
                  body: "Article body/body=body9body",
                  tagList: ["tag", "slug", "flag"],
            };

            service.createArticle(data).subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.title).toBe(data.title);
                  expect(resp.description).toBe(data.description);
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/articles`,
            );
            expect(req.request.method).toBe("POST");
            expect(req.request.body.article.tagList.length).toBe(
                  data.tagList.length,
            );
            expect(req.request.body.article.body).toBe(data.body);

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

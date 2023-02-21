import { TestBed } from "@angular/core/testing";

import { AddToFavoritesService } from "./add-to-favorites.service";
import {
      HttpClientTestingModule,
      HttpTestingController,
} from "@angular/common/http/testing";
import { ProfileInterface } from "../../../types/profile.interface";
import { environment } from "../../../../../environments/environment";
import { ArticleInterface } from "../../../types/article.interface";

describe("ArticleService", () => {
      let service: AddToFavoritesService;
      let httpTestingController: HttpTestingController;
      let respData: { article: ArticleInterface };
      let slug: string;

      beforeEach(() => {
            TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
            });
            service = TestBed.inject(AddToFavoritesService);
            httpTestingController = TestBed.get(HttpTestingController);
            respData = {
                  article: {
                        author: {} as ProfileInterface,
                        body: "article body",
                        createdAt: "article createdAt",
                        description: "article description",
                        favorited: true,
                        favoritesCount: 12,
                        slug: "article slug",
                        tagList: ["article tag"],
                        title: "article title",
                        updatedAt: "article updatedAt",
                  },
            };
            slug = "userSlug";
      });

      it("should be created", () => {
            expect(service).toBeTruthy();
      });

      it("addArticleToFavorite", () => {
            service.addArticleToFavorite(slug).subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.body).toBe("article body");
                  expect(resp.description).toBe("article description");
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/articles/${slug}/favorite`,
            );
            expect(req.request.method).toBe("POST");

            req.flush(respData);
      });

      it("removeArticleFromFavorite", () => {
            service.removeArticleFromFavorite(slug).subscribe(resp => {
                  expect(resp).toBeTruthy();
                  expect(resp.favoritesCount).toBe(12);
                  expect(resp.tagList[0]).toBe("article tag");
                  expect(resp.updatedAt).toBe("article updatedAt");
            });
            const req = httpTestingController.expectOne(
                  `${environment.apiUrl}/articles/${slug}/favorite`,
            );
            expect(req.request.method).toBe("DELETE");

            req.flush(respData);
      });
});

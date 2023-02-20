import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ArticleComponent } from "./article.component";
import { provideMockStore } from "@ngrx/store/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("FeedComponent", () => {
      let component: ArticleComponent;
      let fixture: ComponentFixture<ArticleComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [ArticleComponent],
                  providers: [provideMockStore({})],
                  imports: [RouterTestingModule],
            }).compileComponents();

            fixture = TestBed.createComponent(ArticleComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

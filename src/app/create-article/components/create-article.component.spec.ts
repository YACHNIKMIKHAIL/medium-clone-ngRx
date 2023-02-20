import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateArticleComponent } from "./create-article.component";
import { provideMockStore } from "@ngrx/store/testing";

describe("CreateArticleComponent", () => {
      let component: CreateArticleComponent;
      let fixture: ComponentFixture<CreateArticleComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [CreateArticleComponent],
                  providers: [provideMockStore({})],
            }).compileComponents();

            fixture = TestBed.createComponent(CreateArticleComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

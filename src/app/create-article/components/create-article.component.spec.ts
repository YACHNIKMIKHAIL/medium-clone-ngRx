import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateArticleComponent } from "./create-article.component";
import { provideMockStore } from "@ngrx/store/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("CreateArticleComponent", () => {
      let component: CreateArticleComponent;
      let fixture: ComponentFixture<CreateArticleComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [CreateArticleComponent],
                  providers: [provideMockStore({})],
                  schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(CreateArticleComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

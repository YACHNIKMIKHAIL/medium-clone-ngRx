import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateArticleComponent } from "./create-article.component";
import { provideMockStore } from "@ngrx/store/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("CreateArticleComponent", () => {
      let component: CreateArticleComponent;
      let fixture: ComponentFixture<CreateArticleComponent>;
      let element: DebugElement;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [CreateArticleComponent],
                  providers: [provideMockStore({})],
                  schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(CreateArticleComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            element = fixture.debugElement;
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });

      it("article-form should submit article", () => {
            spyOn(component, "createArticle");
            const formComp = element.query(By.css("mc-article-form"));

            formComp.triggerEventHandler("articleSubmit", {});

            expect(component.createArticle).toHaveBeenCalledTimes(1);
      });
});

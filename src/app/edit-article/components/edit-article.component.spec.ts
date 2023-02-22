import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EditArticleComponent } from "./edit-article.component";
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";

describe("EditArticleComponent", () => {
      let component: EditArticleComponent;
      let fixture: ComponentFixture<EditArticleComponent>;
      let element: DebugElement;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [EditArticleComponent],
                  providers: [provideMockStore({})],
                  imports: [RouterTestingModule],
                  schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(EditArticleComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            element = fixture.debugElement;
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });

      it("should show loading comp", () => {
            component.isLoading$ = of(true);
            fixture.detectChanges();
            const loadingComp = element.query(By.css("mc-loading"));

            expect(loadingComp).toBeTruthy();
      });

      it("should show article comp", () => {
            component.isLoading$ = of(false);
            component.editableArticle = of({});
            fixture.detectChanges();
            const articleComp = element.query(By.css("mc-article-form"));
            console.log(articleComp);

            expect(articleComp).toBeTruthy();
      });

      it("should trigger saveEditArticle()", () => {
            component.isLoading$ = of(false);
            component.editableArticle = of({});
            spyOn(component, "saveEditArticle");

            fixture.detectChanges();
            const articleComp = element.query(By.css("mc-article-form"));

            articleComp.triggerEventHandler("articleSubmit", {});

            expect(component.saveEditArticle).toHaveBeenCalledTimes(1);
      });
});

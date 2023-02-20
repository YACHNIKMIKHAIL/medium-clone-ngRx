import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ArticleFormComponent } from "./article-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ArticleInputInterface } from "../../../types/article-input.interface";

describe("ArticleFormComponent", () => {
      let component: ArticleFormComponent;
      let fixture: ComponentFixture<ArticleFormComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [ArticleFormComponent],
                  imports: [FormsModule, ReactiveFormsModule],
            }).compileComponents();

            fixture = TestBed.createComponent(ArticleFormComponent);
            component = fixture.componentInstance;
            component.initialValuesProps = {
                  title: "string",
                  description: "string",
                  body: "string",
                  tagList: ["string", "string"],
            } as ArticleInputInterface;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

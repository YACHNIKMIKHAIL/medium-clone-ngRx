import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EditArticleComponent } from "./edit-article.component";
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockStore } from "@ngrx/store/testing";

describe("EditArticleComponent", () => {
      let component: EditArticleComponent;
      let fixture: ComponentFixture<EditArticleComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [EditArticleComponent],
                  providers: [provideMockStore({})],
                  imports: [RouterTestingModule],
            }).compileComponents();

            fixture = TestBed.createComponent(EditArticleComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

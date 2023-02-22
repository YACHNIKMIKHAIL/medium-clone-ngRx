import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RegisterComponent } from "./register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideMockStore } from "@ngrx/store/testing";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";

describe("RegisterComponent", () => {
      let component: RegisterComponent;
      let fixture: ComponentFixture<RegisterComponent>;
      let element: DebugElement;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [RegisterComponent],
                  imports: [FormsModule, ReactiveFormsModule],
                  providers: [provideMockStore({})],
                  schemas: [NO_ERRORS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(RegisterComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            element = fixture.debugElement;
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });

      it("should show error", () => {
            component.backendErrors$ = of({ error: ["some err"] });
            fixture.detectChanges();

            const errorElement = element.query(By.css("mc-backend-error-message"));
            fixture.detectChanges();

            expect(errorElement).toBeTruthy();
      });

      it("button is disabled", () => {
            component.isSubmitting$ = of(true);
            const button = element.query(By.css("button"));

            expect(button.nativeElement.disabled).toBeTruthy();
      });
});

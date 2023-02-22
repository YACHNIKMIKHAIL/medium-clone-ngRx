import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideMockStore } from "@ngrx/store/testing";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";

describe("LoginComponent", () => {
      let component: LoginComponent;
      let fixture: ComponentFixture<LoginComponent>;
      let element: DebugElement;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [LoginComponent],
                  imports: [FormsModule, ReactiveFormsModule],
                  providers: [provideMockStore({})],
                  schemas: [NO_ERRORS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(LoginComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            element = fixture.debugElement;
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });

      it("should show error", () => {
            component.backendErrors$ = of({ bla: ["error"] });
            const row = element.query(By.css(".row"));
            fixture.detectChanges();

            const errorComp = row.query(By.css("mc-backend-error-message"));

            expect(errorComp).toBeTruthy();
      });

      it("should call onSubmit()", fakeAsync(() => {
            spyOn(component, "onSubmit");
            fixture.detectChanges();
            const form = element.query(By.css("form"));
            const btn = form.query(By.css("button"));
            fixture.detectChanges();
            btn.triggerEventHandler("click", null);
            component.onSubmit();

            expect(component.onSubmit).toHaveBeenCalled();
            expect(component.onSubmit).toHaveBeenCalledTimes(1);
      }));
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideMockStore } from "@ngrx/store/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("LoginComponent", () => {
      let component: LoginComponent;
      let fixture: ComponentFixture<LoginComponent>;

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
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

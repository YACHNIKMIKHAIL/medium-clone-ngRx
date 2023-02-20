import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RegisterComponent } from "./register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideMockStore } from "@ngrx/store/testing";

describe("RegisterComponent", () => {
      let component: RegisterComponent;
      let fixture: ComponentFixture<RegisterComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [RegisterComponent],
                  imports: [FormsModule, ReactiveFormsModule],
                  providers: [provideMockStore({})],
            }).compileComponents();

            fixture = TestBed.createComponent(RegisterComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

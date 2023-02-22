import {
      ComponentFixture,
      fakeAsync,
      flush,
      TestBed,
      tick,
} from "@angular/core/testing";

import { SettingsComponent } from "./settings.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideMockStore } from "@ngrx/store/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";

describe("SettingsComponent", () => {
      let component: SettingsComponent;
      let fixture: ComponentFixture<SettingsComponent>;
      let element: DebugElement;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [SettingsComponent],
                  imports: [FormsModule, ReactiveFormsModule],
                  providers: [provideMockStore({})],
                  schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(SettingsComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            element = fixture.debugElement;
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });

      it("h1 correct text", () => {
            const title = element.query(By.css(".text-xs-center"));

            expect(title.nativeElement.textContent).toBe("Your Settings");
      });

      it("button correct text", () => {
            component.currentUser = {
                  bio: "bio string",
                  email: "email string",
                  image: "",
                  token: "token string",
                  username: "username string",
            };
            component.initializeForm();
            fixture.detectChanges();

            const form = element.query(By.css("form"));
            fixture.detectChanges();

            const button = form.query(By.css("button"));
            fixture.detectChanges();

            expect(button.nativeElement.textContent).toBe(" Update Settings ");
      });

      it("show loading comp", () => {
            component.isSubmitting$ = of(true);
            fixture.detectChanges();

            const loadingComp = element.query(By.css("mc-loading"));
            expect(loadingComp).toBeTruthy();
      });
});

import {
      ComponentFixture,
      fakeAsync,
      TestBed,
} from "@angular/core/testing";

import { UserProfileComponent } from "./user-profile.component";
import { provideMockStore } from "@ngrx/store/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";

describe("UserProfileComponent", () => {
      let component: UserProfileComponent;
      let fixture: ComponentFixture<UserProfileComponent>;
      let element: DebugElement;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [UserProfileComponent],
                  providers: [provideMockStore({})],
                  imports: [RouterTestingModule],
                  schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(UserProfileComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            element = fixture.debugElement;
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });

      it("show loading", () => {
            component.isLoading$ = of(true);
            fixture.detectChanges();

            const loadingComp = element.query(By.css("mc-loading"));
            expect(loadingComp).toBeTruthy();
      });

      it("show user profile & follow comp & button text is correct", () => {
            component.userProfile = {
                  bio: "bio string",
                  following: true,
                  image: "",
                  username: "username string",
            };
            fixture.detectChanges();

            const userProfile = element.query(By.css(".col-xs-12"));
            expect(userProfile).toBeTruthy();

            fixture.detectChanges();
            const followComp = userProfile.query(By.css("mc-follow"));
            expect(followComp).toBeTruthy();

            component.isCurrentUserProfile$ = of(true);
            fixture.detectChanges();
            const aLink = element.query(By.css(".action-btn"));
            expect(aLink.nativeElement.textContent).toBe(
                  " Edit Profile Settings ",
            );
      });

      it("correct navigate()", fakeAsync(() => {
            pending();
      }));
});

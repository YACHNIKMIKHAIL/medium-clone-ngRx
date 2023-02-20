import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserProfileComponent } from "./user-profile.component";
import { provideMockStore } from "@ngrx/store/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("UserProfileComponent", () => {
      let component: UserProfileComponent;
      let fixture: ComponentFixture<UserProfileComponent>;

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
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

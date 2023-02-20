import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserProfileComponent } from "./user-profile.component";
import { provideMockStore } from "@ngrx/store/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("UserProfileComponent", () => {
      let component: UserProfileComponent;
      let fixture: ComponentFixture<UserProfileComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [UserProfileComponent],
                  providers: [provideMockStore({})],
                  imports: [RouterTestingModule],
            }).compileComponents();

            fixture = TestBed.createComponent(UserProfileComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

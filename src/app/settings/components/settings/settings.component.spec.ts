import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SettingsComponent } from "./settings.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideMockStore } from "@ngrx/store/testing";

describe("SettingsComponent", () => {
      let component: SettingsComponent;
      let fixture: ComponentFixture<SettingsComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [SettingsComponent],
                  imports: [FormsModule, ReactiveFormsModule],
                  providers: [provideMockStore({})],
            }).compileComponents();

            fixture = TestBed.createComponent(SettingsComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

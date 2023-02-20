import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TopBarComponent } from "./top-bar.component";
import { provideMockStore } from "@ngrx/store/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("TopBarComponent", () => {
      let component: TopBarComponent;
      let fixture: ComponentFixture<TopBarComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [TopBarComponent],
                  providers: [provideMockStore({})],
                  schemas: [NO_ERRORS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(TopBarComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

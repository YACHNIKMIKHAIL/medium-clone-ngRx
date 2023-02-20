import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GlobalFeedComponent } from "./global-feed.component";
import { provideMockStore } from "@ngrx/store/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("GlobalFeedComponent", () => {
      let component: GlobalFeedComponent;
      let fixture: ComponentFixture<GlobalFeedComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [GlobalFeedComponent],
                  providers: [provideMockStore({})],
                  schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(GlobalFeedComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

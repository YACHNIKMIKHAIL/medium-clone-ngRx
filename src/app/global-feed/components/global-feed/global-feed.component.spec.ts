import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GlobalFeedComponent } from "./global-feed.component";
import { provideMockStore } from "@ngrx/store/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("GlobalFeedComponent", () => {
      let component: GlobalFeedComponent;
      let fixture: ComponentFixture<GlobalFeedComponent>;
      let element: DebugElement;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [GlobalFeedComponent],
                  providers: [provideMockStore({})],
                  schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(GlobalFeedComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            element = fixture.debugElement;
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });

      it("apiUrl is correct", () => {
            expect(component.url).toBe("/articles");
      });

      it("mc-banner is showed", () => {
            const banner = element.query(By.css("mc-banner"));

            expect(banner).toBeTruthy();
      });
});

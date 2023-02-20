import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FeedToggleComponent } from "./feed-toggle.component";
import { provideMockStore } from "@ngrx/store/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("ToggleFeedComponent", () => {
      let component: FeedToggleComponent;
      let fixture: ComponentFixture<FeedToggleComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [FeedToggleComponent],
                  providers: [provideMockStore({})],
                  schemas: [NO_ERRORS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(FeedToggleComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

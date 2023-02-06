import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PopularTagFeedComponent } from "./popular-tag-feed.component";

describe("PopularTagFeedComponent", () => {
      let component: PopularTagFeedComponent;
      let fixture: ComponentFixture<PopularTagFeedComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [PopularTagFeedComponent],
            }).compileComponents();

            fixture = TestBed.createComponent(PopularTagFeedComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

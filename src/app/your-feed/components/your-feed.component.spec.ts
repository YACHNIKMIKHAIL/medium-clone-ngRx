import { ComponentFixture, TestBed } from "@angular/core/testing";

import { YourFeedComponent } from "./your-feed.component";
import { provideMockStore } from "@ngrx/store/testing";

describe("YourFeedComponent", () => {
      let component: YourFeedComponent;
      let fixture: ComponentFixture<YourFeedComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [YourFeedComponent],
                  providers: [provideMockStore({})],
            }).compileComponents();

            fixture = TestBed.createComponent(YourFeedComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

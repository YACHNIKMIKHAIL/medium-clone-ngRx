import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FeedComponent } from "./feed.component";
import { provideMockStore } from "@ngrx/store/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("FeedComponent", () => {
      let component: FeedComponent;
      let fixture: ComponentFixture<FeedComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [FeedComponent],
                  providers: [provideMockStore({})],
                  imports: [RouterTestingModule],
            }).compileComponents();

            fixture = TestBed.createComponent(FeedComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

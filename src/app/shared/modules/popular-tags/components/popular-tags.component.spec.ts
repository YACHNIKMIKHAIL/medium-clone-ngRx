import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PopularTagsComponent } from "./popular-tags.component";
import { provideMockStore } from "@ngrx/store/testing";

describe("PopularTagsComponent", () => {
      let component: PopularTagsComponent;
      let fixture: ComponentFixture<PopularTagsComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [PopularTagsComponent],
                  providers: [provideMockStore({})],
            }).compileComponents();

            fixture = TestBed.createComponent(PopularTagsComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

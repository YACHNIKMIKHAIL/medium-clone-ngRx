import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PopularTagFeedComponent } from "./popular-tag-feed.component";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";

describe("PopularTagFeedComponent", () => {
      let component: PopularTagFeedComponent;
      let fixture: ComponentFixture<PopularTagFeedComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  providers: [
                        {
                              provide: ActivatedRoute,
                              useValue: {
                                    params: of({ slug: "123" }),
                              },
                        },
                  ],
                  declarations: [PopularTagFeedComponent],
            }).compileComponents();

            fixture = TestBed.createComponent(PopularTagFeedComponent);
            component = fixture.componentInstance;
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

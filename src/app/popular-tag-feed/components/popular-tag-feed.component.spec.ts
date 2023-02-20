import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PopularTagFeedComponent } from "./popular-tag-feed.component";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

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
                  schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }).compileComponents();

            fixture = TestBed.createComponent(PopularTagFeedComponent);
            component = fixture.componentInstance;
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

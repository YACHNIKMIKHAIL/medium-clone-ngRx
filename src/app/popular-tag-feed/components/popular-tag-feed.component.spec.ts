import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PopularTagFeedComponent } from "./popular-tag-feed.component";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("PopularTagFeedComponent", () => {
      let component: PopularTagFeedComponent;
      let fixture: ComponentFixture<PopularTagFeedComponent>;
      let element: DebugElement;

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
            element = fixture.debugElement;
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });

      it("have correct slug", () => {
            component.ngOnInit();
            expect(component.tagName).toBe("123");
      });

      it("have correct url", () => {
            component.ngOnInit();
            expect(component.url).toBe("/articles?tag=123");
      });
      it("show popular tags comp", () => {
            const popularTagsComp = element.query(By.css("mc-popular-tags"));

            expect(popularTagsComp).toBeTruthy();
      });
});

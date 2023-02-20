import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaginationComponent } from "./pagination.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("PaginationComponent", () => {
      let component: PaginationComponent;
      let fixture: ComponentFixture<PaginationComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [PaginationComponent],
                  imports: [RouterTestingModule],
            }).compileComponents();

            fixture = TestBed.createComponent(PaginationComponent);
            component = fixture.componentInstance;
            component.totalCountProps = 10;
            component.limitProps = 5;
            component.currentPageProps = 1;
            component.baseUrlProps = "";
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

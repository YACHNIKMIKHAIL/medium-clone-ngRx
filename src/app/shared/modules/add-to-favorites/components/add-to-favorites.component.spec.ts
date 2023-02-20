import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddToFavoritesComponent } from "./add-to-favorites.component";
import { provideMockStore } from "@ngrx/store/testing";

describe("AddToFavoritesComponent", () => {
      let component: AddToFavoritesComponent;
      let fixture: ComponentFixture<AddToFavoritesComponent>;

      beforeEach(async () => {
            await TestBed.configureTestingModule({
                  declarations: [AddToFavoritesComponent],
                  providers: [provideMockStore({})],
            }).compileComponents();

            fixture = TestBed.createComponent(AddToFavoritesComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
      });

      it("should create", () => {
            expect(component).toBeTruthy();
      });
});

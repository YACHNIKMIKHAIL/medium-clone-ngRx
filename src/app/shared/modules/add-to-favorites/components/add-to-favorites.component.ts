import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {
      addToFavoritesAction,
      removeFromFavoritesAction,
} from "../store/actions/add-to-favorites.actions";

@Component({
      selector: "mc-add-to-favorites",
      templateUrl: "./add-to-favorites.component.html",
      styleUrls: ["./add-to-favorites.component.scss"],
})
export class AddToFavoritesComponent implements OnInit {
      @Input("isFavorited") isFavoritedProps!: boolean;
      @Input("articleSlug") articleSlugProps!: string;
      @Input("favoritesCount") favoritesCountProps!: number;
      @Input("text") textProps?: string;
      isFavorited!: boolean;
      articleSlug!: string;
      favoritesCount!: number;
      text?: string;

      constructor(private store: Store) {}

      ngOnInit(): void {
            this.initValues();
      }

      handleLike() {
            const slug = this.articleSlug;
            if (this.isFavorited) {
                  this.favoritesCount = this.favoritesCount - 1;
                  this.store.dispatch(removeFromFavoritesAction({ slug }));
            } else {
                  this.favoritesCount = this.favoritesCount + 1;
                  this.store.dispatch(addToFavoritesAction({ slug }));
            }
            this.isFavorited = !this.isFavorited;
      }

      initValues(): void {
            this.isFavorited = this.isFavoritedProps;
            this.articleSlug = this.articleSlugProps;
            this.favoritesCount = this.favoritesCountProps;
            this.text = this.textProps;
      }
}

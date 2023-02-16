import { Component, Input, OnInit } from "@angular/core";

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
      isFavorited: boolean | unknown;
      articleSlug: string | unknown;
      favoritesCount: number | unknown;
      text: string | unknown;

      constructor() {}

      ngOnInit(): void {
            this.initValues();
      }

      handleLike() {
            if (this.isFavoritedProps) {
                  console.log("dislike -");
            } else {
                  console.log("like +");
            }
      }

      initValues(): void {
            this.isFavorited = this.isFavoritedProps;
            this.articleSlug = this.articleSlugProps;
            this.favoritesCount = this.favoritesCountProps;
            this.text = this.textProps;
      }
}

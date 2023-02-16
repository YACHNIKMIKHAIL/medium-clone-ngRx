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

      constructor() {}

      ngOnInit(): void {}
}

import { Component, Input, OnInit } from "@angular/core";

@Component({
      selector: "mc-favorite",
      templateUrl: "./favorite.component.html",
      styleUrls: ["./favorite.component.scss"],
})
export class FavoriteComponent implements OnInit {
      @Input("favoritesCount") favoritesCountProps!: number;
      @Input("isFavorite") isFavoriteProps!: boolean;
      @Input("slug") slugProps!: string;
      constructor() {}

      ngOnInit(): void {}

      likeOrDislike() {
            if (this.isFavoriteProps) {
                  console.log("DISLIKE - ", this.slugProps);
                  //del https://api.realworld.io/api/articles/If-we-quant
            } else {
                  console.log("LIKE + ", this.slugProps);
                  //post https://api.realworld.io/api/articles/If-we-quant
            }
      }
}

import { Component } from "@angular/core";

@Component({
      selector: "mc-loading",
      template:
            "<div class='wrap'> <img src=\"https://www.wall-art.de/out/pictures/generated/product/2/780_780_80/2715-wandtattoo-ladebalken-web-einzel.jpg\" \n" +
            '     alt="loading"></div>',
      styles: [".wrap{margin:0 auto;}", "img{width:200px;}"],
})
export class LoadingComponent {}

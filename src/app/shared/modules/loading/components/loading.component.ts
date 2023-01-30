import { Component } from "@angular/core";
import { interval, map, repeat, take } from "rxjs";

@Component({
      selector: "mc-loading",
      template:
            '<ng-container *ngIf="(counter$ | async) as progress">' +
            '<div class="progress-bar" [style.width.%]="progress"></div>' +
            "</ng-container>",
      styles: [
            ".progress-bar {\n" +
                  "  height: 1rem;\n" +
                  "  background-color: #5cb85c;\n" +
                  "  margin-top: 20px;\n" +
                  "  margin-bottom: 20px;\n" +
                  "}",
      ],
})
export class LoadingComponent {
      source = interval(15);
      counter$ = this.source.pipe(
            take(100),
            map(value => value + 1),
            repeat(5),
      );
}

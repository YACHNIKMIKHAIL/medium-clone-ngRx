import { Injectable } from "@angular/core";

@Injectable({
      providedIn: "root",
})
export class UtilsService {
      constructor() {}

      public range(value: number): number[] {
            return [...Array(value).keys()].map(el => el + 1);
      }
}

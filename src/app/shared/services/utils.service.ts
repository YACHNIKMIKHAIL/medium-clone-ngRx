import { Injectable } from "@angular/core";

@Injectable({
      providedIn: "root",
})
export class UtilsService {
      constructor() {}

      public range(value: number): number[] {
            let res = [];
            for (let i = 1; i < value; i++) {
                  res.push(i);
            }
            return res;
      }
}

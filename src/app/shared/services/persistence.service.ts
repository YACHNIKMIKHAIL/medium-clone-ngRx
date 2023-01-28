import { Injectable } from "@angular/core";

@Injectable({
      providedIn: "root",
})
export class PersistenceService {
      constructor() {}

      set(key: string, data: any): void {
            try {
                  localStorage.setItem(key, JSON.stringify(data));
            } catch (e) {
                  console.error("Error to saving to localStorage", e);
            }
      }
      get(key: string): any {
            try {
                  return JSON.parse(localStorage.getItem(key) as string);
            } catch (e) {
                  console.error("Error to getting from localStorage", e);
                  return null;
            }
      }
}

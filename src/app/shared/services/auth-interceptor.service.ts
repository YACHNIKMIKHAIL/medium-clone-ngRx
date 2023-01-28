import { Injectable } from "@angular/core";
import {
      HttpEvent,
      HttpHandler,
      HttpInterceptor,
      HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { PersistenceService } from "./persistence.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
      constructor(private persistenceService: PersistenceService) {}

      intercept(
            req: HttpRequest<any>,
            next: HttpHandler,
      ): Observable<HttpEvent<any>> {
            const clone = req.clone({
                  setHeaders: {
                        Authorization:
                              `Token ${this.persistenceService.get(
                                    "accessToken",
                              )}` || "",
                  },
            });
            return next.handle(clone);
      }
}

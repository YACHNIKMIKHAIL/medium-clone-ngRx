import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { GetUserProfileResponseInterface } from "../../../../user-profile/types/get-user-profile-response.interface";
import { ProfileInterface } from "../../../types/profile.interface";
import { environment } from "../../../../../environments/environment";

@Injectable({
      providedIn: "root",
})
export class FollowService {
      constructor(private http: HttpClient) {}
      follow(name: string, isFollowed: boolean): Observable<ProfileInterface> {
            return isFollowed
                  ? this.http
                          .delete<GetUserProfileResponseInterface>(
                                this.getUrl(name),
                          )
                          .pipe(this.getProfile)
                  : this.http
                          .post<GetUserProfileResponseInterface>(
                                this.getUrl(name),
                                {},
                          )
                          .pipe(this.getProfile);
      }
      getUrl(name: string): string {
            return `${environment.apiUrl}/profiles/${name}/follow`;
      }
      getProfile(
            source$: Observable<GetUserProfileResponseInterface>,
      ): Observable<ProfileInterface> {
            return source$.pipe(map(res => res.profile));
      }
}

import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { ProfileInterface } from "../../shared/types/profile.interface";
import {
      errorSelector,
      isLoadingSelector,
      userProfileSelector,
} from "../store/selectors";
import { Observable, Subscription } from "rxjs";
import { getUserProfileAction } from "../store/actions/get-user-profile.actions";
import { ActivatedRoute } from "@angular/router";

@Component({
      selector: "mc-user-profile",
      templateUrl: "./user-profile.component.html",
      styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit, OnDestroy {
      isLoading$: Observable<boolean> | undefined;
      slug: string | undefined;
      userProfileSubscription: Subscription | undefined;
      userProfile!: ProfileInterface | null;
      error$!: Observable<string | null>;
      constructor(private store: Store, private route: ActivatedRoute) {}

      ngOnInit(): void {
            // this.slug &&
            //       this.store.dispatch(
            //             getUserProfileAction({ slug: this.slug }),
            //       );
            this.initializeValues();
            this.fetchData();
      }

      initializeValues(): void {
            this.slug = this.route.snapshot.paramMap.get("slug") as string;
            this.isLoading$ = this.store.pipe(select(isLoadingSelector));
            this.userProfileSubscription = this.store
                  .pipe(select(userProfileSelector))
                  .subscribe(data => (this.userProfile = data));
            this.error$ = this.store.pipe(select(errorSelector));
      }

      fetchData(): void {
            this.slug &&
                  this.store.dispatch(
                        getUserProfileAction({ slug: this.slug }),
                  );
      }

      ngOnDestroy(): void {
            this.userProfileSubscription &&
                  this.userProfileSubscription.unsubscribe();
      }
}

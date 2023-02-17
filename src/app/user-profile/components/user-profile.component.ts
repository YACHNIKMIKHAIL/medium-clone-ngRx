import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { ProfileInterface } from "../../shared/types/profile.interface";
import {
      errorSelector,
      isLoadingSelector,
      userProfileSelector,
} from "../store/selectors";
import { combineLatest, filter, map, Observable, Subscription } from "rxjs";
import { getUserProfileAction } from "../store/actions/get-user-profile.actions";
import { ActivatedRoute, Router } from "@angular/router";
import { currentUserSelector } from "../../auth/store/selectors";
import { CurrentUserInterface } from "../../shared/types/current-user.interface";

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
      apiUrl: string = "";
      isCurrentUserProfile$!: Observable<boolean>;
      constructor(
            private store: Store,
            private route: ActivatedRoute,
            private router: Router,
      ) {}

      ngOnInit(): void {
            this.initializeListeners();
            this.initializeValues();
            this.fetchData();
      }

      initializeValues(): void {
            const isFavorited = this.router.url.includes("favorites");

            this.slug = this.route.snapshot.paramMap.get("slug") as string;
            this.isLoading$ = this.store.pipe(select(isLoadingSelector));
            this.error$ = this.store.pipe(select(errorSelector));
            this.apiUrl = isFavorited
                  ? `/articles?favorited=${this.slug}`
                  : `/articles?author=${this.slug}`;

            this.isCurrentUserProfile$ = combineLatest(
                  this.store.pipe(select(currentUserSelector), filter(Boolean)),
                  this.store.pipe(select(userProfileSelector), filter(Boolean)),
            ).pipe(
                  map(
                        ([user, profile]: [
                              CurrentUserInterface,
                              ProfileInterface,
                        ]) => user.username === profile.username,
                  ),
            );
      }

      initializeListeners(): void {
            this.userProfileSubscription = this.store
                  .pipe(select(userProfileSelector))
                  .subscribe(data => (this.userProfile = data));
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

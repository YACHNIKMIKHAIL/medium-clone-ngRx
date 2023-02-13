import { Component, OnDestroy, OnInit } from "@angular/core";
import {
      FormBuilder,
      FormControl,
      FormGroup,
      Validators,
} from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { CurrentUserInterface } from "../../../shared/types/current-user.interface";
import { filter, Observable, Subscription } from "rxjs";
import { currentUserSelector } from "../../../auth/store/selectors";
import { BackendErrorsInterface } from "../../../shared/types/backend-errors.interface";
import {
      settingsStateIsSubmittingSelector,
      settingsStateValidationErrorsSelector,
} from "../../store/selectors";
import { updateCurrentUserAction } from "../../../auth/store/actions/update-current-user.actions";
import { CurrentUserInputInterface } from "../../../shared/types/current-user-inpur.interface";
import { logoutAction } from "../../../auth/store/actions/sync.actions";

@Component({
      selector: "mc-settings",
      templateUrl: "./settings.component.html",
      styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit, OnDestroy {
      currentUser: CurrentUserInterface | null = null;
      currentUserSubscription = new Subscription();
      currentUserForm: FormGroup<any> = new FormGroup({});
      isSubmitting$ = new Observable<boolean>();
      backendErrors$ = new Observable<BackendErrorsInterface | null>();
      constructor(private fb: FormBuilder, private store: Store) {}

      ngOnInit(): void {
            this.initializeListeners();
            this.initializeValues();
      }

      ngOnDestroy(): void {
            this.currentUserSubscription.unsubscribe();
      }

      initializeListeners(): void {
            this.currentUserSubscription = this.store
                  .pipe(select(currentUserSelector), filter(Boolean))
                  .subscribe(currentUser => {
                        this.currentUser = currentUser;
                        this.initializeForm();
                  });
      }
      initializeForm(): void {
            this.currentUserForm = this.fb.group({
                  image: new FormControl(this.currentUser?.image, [
                        Validators.required,
                  ]),
                  username: new FormControl(this.currentUser?.username, [
                        Validators.required,
                  ]),
                  bio: new FormControl(this.currentUser?.bio),
                  email: new FormControl(this.currentUser?.email, [
                        Validators.required,
                  ]),
                  password: new FormControl("" as string, [
                        Validators.required,
                  ]),
            });
      }
      initializeValues(): void {
            this.isSubmitting$ = this.store.pipe(
                  select(settingsStateIsSubmittingSelector),
            );
            this.backendErrors$ = this.store.pipe(
                  select(settingsStateValidationErrorsSelector),
            );
      }

      submit() {
            const currentUserInput: CurrentUserInputInterface = {
                  ...this.currentUser,
                  ...this.currentUserForm.value,
            };
            this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
      }

      logout() {
            this.store.dispatch(logoutAction());
      }
}

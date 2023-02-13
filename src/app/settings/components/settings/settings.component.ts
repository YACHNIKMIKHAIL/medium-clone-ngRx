import { Component, OnDestroy, OnInit } from "@angular/core";
import {
      FormBuilder,
      FormControl,
      FormGroup,
      Validators,
} from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { CurrentUserInterface } from "../../../shared/types/current-user.interface";
import { filter, Subscription } from "rxjs";
import { currentUserSelector } from "../../../auth/store/selectors";

interface CurrentUserFormInterface {
      image: FormControl<string | null | undefined>;
      username: FormControl<string | null | undefined>;
      bio: FormControl<string | null | undefined>;
      email: FormControl<string | null | undefined>;
      password: FormControl<string | null>;
}
@Component({
      selector: "mc-settings",
      templateUrl: "./settings.component.html",
      styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit, OnDestroy {
      currentUser: CurrentUserInterface | null = null;
      currentUserSubscription = new Subscription();
      currentUserForm: FormGroup<CurrentUserFormInterface> = new FormGroup(
            {} as CurrentUserFormInterface,
      );
      constructor(private fb: FormBuilder, private store: Store) {}

      ngOnInit(): void {
            this.initializeListeners();
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
                  password: new FormControl("", [Validators.required]),
            });
      }

      updateUser() {
            console.log(this.currentUserForm.value);
      }
}

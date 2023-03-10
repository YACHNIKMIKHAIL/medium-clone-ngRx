import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { registerAction } from "../../store/actions/register.actions";
import { Observable } from "rxjs";
import {
      isSubmittingSelector,
      validationErrorsSelector,
} from "../../store/selectors";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { BackendErrorsInterface } from "../../../shared/types/backend-errors.interface";

@Component({
      selector: "mc-register",
      templateUrl: "./register.component.html",
      styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
      public form: FormGroup = new FormGroup<any>({});
      public isSubmitting$ = new Observable<boolean>();
      public backendErrors$ = new Observable<BackendErrorsInterface | null>();

      constructor(private fb: FormBuilder, private store: Store) {}

      ngOnInit(): void {
            this.initializeForm();
            this.initializeValues();
      }

      initializeForm(): void {
            this.form = this.fb.group({
                  username: ["", Validators.required],
                  email: [
                        "",
                        [
                              Validators.required,
                              Validators.pattern(
                                    "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
                              ),
                        ],
                  ],
                  password: [
                        "",
                        [Validators.required, Validators.minLength(4)],
                  ],
            });
      }

      onSubmit(): void {
            const request: RegisterRequestInterface = {
                  user: this.form.value,
            };
            this.store.dispatch(registerAction({ request }));
      }

      initializeValues(): void {
            this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
            this.backendErrors$ = this.store.pipe(
                  select(validationErrorsSelector),
            );
      }
}

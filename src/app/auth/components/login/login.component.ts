import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { BackendErrorsInterface } from "../../../shared/types/backend-errors.interface";
import { select, Store } from "@ngrx/store";
import {
      isSubmittingSelector,
      validationErrorsSelector,
} from "../../store/selectors";
import { LoginRequestInterface } from "../../types/loginRequest.interface";
import { loginAction } from "../../store/actions/login.action";

@Component({
      selector: "mc-login",
      templateUrl: "./login.component.html",
      styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
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
            const request: LoginRequestInterface = {
                  user: this.form.value,
            };
            this.store.dispatch(loginAction({ request }));
      }

      initializeValues(): void {
            this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
            this.backendErrors$ = this.store.pipe(
                  select(validationErrorsSelector),
            );
      }
}

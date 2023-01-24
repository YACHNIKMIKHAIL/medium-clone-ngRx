import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registerAction } from '../../store/register.actions';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from '../../store/selectors';
import { AuthService } from '../../services/auth.service';

@Component({
      selector: 'mc-register',
      templateUrl: './register.component.html',
      styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
      public form: FormGroup = new FormGroup<any>({});
      public isSubmitting$: Observable<boolean> = new Observable<boolean>();

      constructor(
            private fb: FormBuilder,
            private store: Store,
            private authService: AuthService,
      ) {}

      ngOnInit(): void {
            this.initializeForm();
            this.initializeValues();
      }

      initializeForm(): void {
            this.form = this.fb.group({
                  username: ['', Validators.required],
                  email: ['', Validators.required],
                  password: [
                        '',
                        [Validators.required, Validators.minLength(4)],
                  ],
            });
      }

      onSubmit(): void {
            console.log(this.form.valid);
            console.log(this.form.value);
            this.store.dispatch(registerAction(this.form.value));
            this.authService
                  .register(this.form.value)
                  .subscribe(currentUser => {
                        console.log('currentUser', currentUser);
                  });
      }

      initializeValues(): void {
            this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
            this.isSubmitting$.subscribe(data => console.log(data));
      }
}

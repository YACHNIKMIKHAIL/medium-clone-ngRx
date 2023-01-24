import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from '../store/register.actions';

@Component({
      selector: 'mc-register',
      templateUrl: './register.component.html',
      styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
      public form: FormGroup = new FormGroup<any>({});

      constructor(private fb: FormBuilder, private store: Store) {}

      ngOnInit(): void {
            this.initializeForm();
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
      }
}

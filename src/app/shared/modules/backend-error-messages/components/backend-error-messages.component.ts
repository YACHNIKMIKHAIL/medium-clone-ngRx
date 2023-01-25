import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../../types/backendErrors.interface';

@Component({
      selector: 'mc-backend-error-messages',
      templateUrl: './backend-error-messages.component.html',
      styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
      @Input('backendErrors')
      backendErrorsProps: BackendErrorsInterface | null = null;
      errorMessages: string[] = [];
      constructor() {}

      ngOnInit(): void {
            this.errorMessages = Object.keys(this.backendErrorsProps!).map(
                  (name: string) => {
                        const message =
                              this.backendErrorsProps![name].join(', ');
                        return `${name} ${message}`;
                  },
            );
      }
}

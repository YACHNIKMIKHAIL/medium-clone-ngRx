import { Component, Input } from "@angular/core";

@Component({
      selector: "mc-error-message",
      template: '<div class="error">{{ messageProps }}</div>',
      styles: [".error{ color: red;font-weight: bold;}"],
})
export class ErrorMessageComponent {
      @Input("message") messageProps: string | null = "Some error occurred!";
}

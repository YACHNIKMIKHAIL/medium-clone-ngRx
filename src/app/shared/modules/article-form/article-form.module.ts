import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleFormComponent } from "./components/article-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorMessageModule } from "../error-message/error-message.module";
import { BackendErrorMessagesModule } from "../backend-error-messages/backend-error-messages.module";

@NgModule({
      declarations: [ArticleFormComponent],
      imports: [
            CommonModule,
            ReactiveFormsModule,
            ErrorMessageModule,
            BackendErrorMessagesModule,
      ],
      exports: [ArticleFormComponent],
})
export class ArticleFormModule {}

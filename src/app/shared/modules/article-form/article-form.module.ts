import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleFormComponent } from "./components/article-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorMessageModule } from "../error-message/error-message.module";
import { BackendErrorMessagesModule } from "../backend-error-messages/backend-error-messages.module";
import { LoadingModule } from "../loading/loading.module";

@NgModule({
      declarations: [ArticleFormComponent],
      imports: [
            CommonModule,
            ReactiveFormsModule,
            ErrorMessageModule,
            BackendErrorMessagesModule,
            LoadingModule,
      ],
      exports: [ArticleFormComponent],
})
export class ArticleFormModule {}

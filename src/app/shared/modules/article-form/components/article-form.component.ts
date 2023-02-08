import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
      FormBuilder,
      FormControl,
      FormGroup,
      Validators,
} from "@angular/forms";
import { ArticleInputInterface } from "../../../types/article-input.interface";
import { BackendErrorsInterface } from "../../../types/backendErrors.interface";

@Component({
      selector: "mc-article-form",
      templateUrl: "./article-form.component.html",
      styleUrls: ["./article-form.component.scss"],
})
export class ArticleFormComponent implements OnInit {
      @Input("initialValues") initialValuesProps!: ArticleInputInterface;
      @Input("isSubmitting") isSubmittingProps!: boolean | null;
      @Input("errors") errorsProps!: BackendErrorsInterface | null;
      @Output("articleSubmit") articleSubmitEvent =
            new EventEmitter<ArticleInputInterface>();

      articleForm!: FormGroup<{
            description: FormControl<string | null>;
            title: FormControl<string | null>;
            body: FormControl<string | null>;
            tagList: FormControl<string | null>;
      }>;
      constructor(private fb: FormBuilder) {}

      ngOnInit(): void {
            this.initializeForm();
      }

      initializeForm(): void {
            this.articleForm = this.fb.group({
                  title: new FormControl(this.initialValuesProps.title, [
                        Validators.minLength(4),
                        Validators.required,
                  ]),
                  description: new FormControl(
                        this.initialValuesProps.description,
                        [Validators.minLength(4), Validators.required],
                  ),
                  body: new FormControl(this.initialValuesProps.body, [
                        Validators.minLength(4),
                        Validators.required,
                  ]),
                  tagList: new FormControl(
                        this.initialValuesProps.tagList.join(" "),
                  ),
            });
      }

      onSubmit() {
            this.articleSubmitEvent.emit({
                  title: this.articleForm.value.title as string,
                  description: this.articleForm.value.description as string,
                  body: this.articleForm.value.body as string,
                  tagList: this.articleForm.value.tagList
                        ?.trim()
                        .split(" ") as string[],
            });
      }
}

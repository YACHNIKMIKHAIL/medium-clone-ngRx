import { BackendErrorsInterface } from "../../shared/types/backend-errors.interface";
import { ArticleInputInterface } from "../../shared/types/article-input.interface";

export interface EditArticleStateInterface {
      isSubmitting: boolean;
      error: BackendErrorsInterface | null;
      data: ArticleInputInterface | null;
      isLoading: boolean;
}

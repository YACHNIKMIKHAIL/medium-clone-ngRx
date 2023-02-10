import { BackendErrorsInterface } from "../../shared/types/backend-errors.interface";

export interface CreateArticleStateInterface {
      isSubmitting: boolean;
      error: BackendErrorsInterface | null;
}

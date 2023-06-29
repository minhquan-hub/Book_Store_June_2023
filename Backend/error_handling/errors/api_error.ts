import BaseError from "../base_error";

export class APIError extends BaseError {
  constructor(
    name: string,
    statusCode = 500,
    isOperational = true,
    description = "internal server error"
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export default APIError;

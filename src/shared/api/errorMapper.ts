import { AppError } from "./types";

export function mapError(error: any): AppError {
  const status = error.response?.status;

  const backendError = error.response?.data?.error;

  if (backendError) {
    return {
      code: backendError.code,
      message: backendError.message,
      status,
    };
  }

  // fallback
  return {
    code: "UNKNOWN_ERROR",
    message: "Something went wrong. Please try again.",
    status: status || 0,
  };
}
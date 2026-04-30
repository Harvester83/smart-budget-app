export type AppError = {
    code: string;
    message: string;
    status: number
}

export type ApiResponse<T> = {
    data: T | null;
    error: AppError | null;
}
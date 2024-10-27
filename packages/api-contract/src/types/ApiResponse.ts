import type { ApiError } from "./ApiError"

export type ApiSuccessResponse<T> = {
    ok: true,
    data: T,
}

export type ApiErrorResponse<TError extends ApiError> = {
    ok: false,
    error: TError,
}

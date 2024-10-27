export type ApiError<TStatus extends number = number, TReason extends string = string> = {
    status: TStatus;
    reason: TReason;
    message?: string;   
}

export type ApiErrorBadRequest = ApiError<400, "Bad Request">
export type ApiErrorUnauthorized = ApiError<401, "Unauthorized">;
export type ApiErrorForbidden = ApiError<403, "Forbidden">;
export type ApiErrorNotFound = ApiError<404, "Not Found">;
export type ApiErrorInternal = ApiError<500, "Internal Server Error">;


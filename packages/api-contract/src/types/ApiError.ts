export type ApiError<TReason extends string = string> = {
    reason: TReason;
    message?: string;   
}

export enum ApiErrorReason {
    BAD_REQUEST = "Bad Request",
    UNAUTHORIZED = "Unauthorized",
    FORBIDDEN = "Forbidden",
    NOT_FOUND = "Not Found",
    INTERNAL = "Internal Server Error",
} 

export type ApiErrorBadRequest = ApiError<ApiErrorReason.BAD_REQUEST>
export type ApiErrorUnauthorized = ApiError<ApiErrorReason.UNAUTHORIZED>;
export type ApiErrorForbidden = ApiError<ApiErrorReason.FORBIDDEN>;
export type ApiErrorNotFound = ApiError<ApiErrorReason.NOT_FOUND>;
export type ApiErrorInternal = ApiError<ApiErrorReason.INTERNAL>;

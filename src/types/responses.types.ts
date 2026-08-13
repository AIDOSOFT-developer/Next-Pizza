export interface ApiResponse<T> {
    status: "error | success";
    data: T;
}

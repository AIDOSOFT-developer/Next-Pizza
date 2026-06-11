export interface ApiResponse<T> {
    success: string;
    data: T;
}

export interface IPizzaDTO {
    id: number;
    name: string;
    imageUrl: string;
    category: number[];
    size: number[];
    price: number;
    quantity: number;
}

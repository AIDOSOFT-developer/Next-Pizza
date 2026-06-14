export interface ApiResponse<T> {
    success: string;
    data: T;
}

export interface IPizzaDTO {
    id: number;
    name: string;
    imageUrl: string;
    type: number[];
    category: number;
    size: number[];
    price: number;
    quantity: number;
    rating: number;
}

interface IPizzaInfo {
    createdAt?: string;
    updatedAt?: string;
}

export interface IPizzaDTO extends IPizzaInfo {
    readonly id: number;
    name: string;
    imageUrl: string;
    type: number[];
    category: number;
    size: number[];
    price: number;
    quantity: number;
    rating: number;
}

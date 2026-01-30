export interface IPizzaInfo {
  createdAt?: Date;
}

export interface IPizzaDTO extends IPizzaInfo {
  id: number;
  name: string;
  imageUrl: string;
  category: number[];
  size: number[];
  price: number;
}

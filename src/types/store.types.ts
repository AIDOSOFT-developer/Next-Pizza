import { IPizzaDTO } from "./pizza.types";

export interface PizzaStore {
    pizza: IPizzaDTO[];
    currentState: number;
    currentItem: string;
    isActiveMockup: boolean;
    setPizza: (pizza: IPizzaDTO[]) => void;
    setActiveMockup: () => void;
    setCurrentState: (index: number) => void;
    setCurrentItem: (index: string) => void;
    sortPizza: (string: string) => void;
}

export interface PizzaCartStore {
    addedPizza: IPizzaDTO[];
    totalPrice: number;
    pizzaquantity: number;
    setTotalPrice: (price: number) => void;
    setPizzaQuantity: (quantity: number) => void;
    addPizza: (pizza: IPizzaDTO) => void;
}

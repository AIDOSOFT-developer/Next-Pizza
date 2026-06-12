import { IPizzaDTO } from "./pizza.types";

export interface PizzaStore {
    pizza: IPizzaDTO[];
    currentState: number;
    currentItem: string;
    setPizza: (pizza: IPizzaDTO[]) => void;
    setCurrentState: (index: number) => void;
    setCurrentItem: (index: string) => void;
    sortPizza: (string: string) => void;
}

export interface PizzaMockup {
    isActiveMockup: boolean;
    setActiveMockup: () => void;
}

export interface PizzaCartStore {
    addedPizza: IPizzaDTO[];
    totalPrice: number;
    cartQuantity: number;
    setCartQuantity: () => void;
    addPizza: (pizza: IPizzaDTO) => void;
    setTotalPrice: () => void;
}

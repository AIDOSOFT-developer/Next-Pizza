import { IPizzaDTO } from "./pizza.types";

export interface PizzaStore {
    pizza: IPizzaDTO[];
    filteredPizza: IPizzaDTO[];
    currentState: number;
    currentItem: string;
    setPizza: (pizza: IPizzaDTO[]) => void;
    setCurrentState: (index: number) => void;
    setCurrentItem: (index: string) => void;
    sortPizza: (string: string) => void;
    sortCategoryPizza: (pizzaCategory: number) => void;
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

export interface PizzaCart {
    cart: IPizzaDTO[];
    addPizza: (pizza: IPizzaDTO) => void;
    decreasePizza: (pizza: IPizzaDTO) => void;
}

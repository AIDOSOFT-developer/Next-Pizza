import { create } from "zustand";

import { PizzaMockup, PizzaStore } from "../types/store.types";
import { IPizzaDTO } from "../types/pizza.types";
import { devtools } from "zustand/middleware";

export const usePizzaData = create<PizzaStore>()((set, get) => ({
    pizza: [],
    filteredPizza: [],

    currentItem: "популярности",
    currentState: 0,

    setPizza: (pizza) => set(() => ({ pizza, filteredPizza: pizza })),
    setCurrentState: (index) => set(() => ({ currentState: index })),
    setCurrentItem: (index) => set({ currentItem: index }),

    sortPizza(string) {
        const data = [...get().filteredPizza];
        let sorted = data;

        switch (string) {
            case "популярности":
                sorted = data.sort((a, b) => b.rating - a.rating);
                break;

            case "цене (ASC)":
                sorted = data.sort((a, b) => a.price - b.price);

                break;
            case "цене (DESC)":
                sorted = data.sort((a, b) => b.price - a.price);

                break;

            case "алфавиту":
                sorted = data.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        set({ filteredPizza: sorted });
    },

    sortCategoryPizza: (pizzaCategory) =>
        set((state) => ({
            filteredPizza:
                pizzaCategory === 0
                    ? state.pizza
                    : state.pizza.filter(
                          (item) => item.category === pizzaCategory,
                      ),
        })),
}));

export const usePizzaMockup = create<PizzaMockup>((set) => ({
    currentState: 0,
    isActiveMockup: false,
    setActiveMockup: () =>
        set((state) => ({ isActiveMockup: !state.isActiveMockup })),
}));

interface PizzaCart {
    cart: IPizzaDTO[];
    addPizza: (pizza: IPizzaDTO) => void;
    decreasePizza: (pizza: IPizzaDTO) => void;
}

export const useCartPizza = create<PizzaCart>()(
    devtools((set, get) => ({
        cart: [],

        addPizza: (pizza) =>
            set((state) => {
                const existing = get().cart.find(
                    (item) => item.id === pizza.id,
                );

                if (existing) {
                    return {
                        cart: state.cart.map((cartItem) =>
                            cartItem.id === pizza.id
                                ? { ...cartItem, quantity: pizza.quantity + 1 }
                                : cartItem,
                        ),
                    };
                }

                return {
                    cart: [...state.cart, { ...pizza, quantity: 1 }],
                };
            }),

        decreasePizza: (pizza) =>
            set((state) => {
                const existing = state.cart.find(
                    (item) => item.id === pizza.id,
                );

                if (existing) {
                    return {
                        cart: state.cart.map((cartItem) =>
                            cartItem.id === pizza.id
                                ? { ...cartItem, quantity: pizza.quantity - 1 }
                                : cartItem,
                        ),
                    };
                }

                return {
                    cart: [...state.cart],
                };
            }),
    })),
);

import { create } from "zustand";
import { PizzaCartStore, PizzaMockup, PizzaStore } from "../types/store.types";
import { IPizzaDTO } from "../types/pizza.types";

export const usePizzaData = create<PizzaStore>()((set) => ({
    pizza: [],
    currentState: 0,
    isActiveMockup: false,
    currentItem: "популярности",
    setPizza: (pizza) => set(() => ({ pizza })),

    setCurrentState: (index) => set(() => ({ currentState: index })),
    sortPizza(string) {
        switch (string) {
            case "по цене (ASC)":
                set((state) => ({
                    pizza: state.pizza.sort((a, b) => a.price - b.price),
                }));
                break;
            case "по цене (DESC)":
                set((state) => ({
                    pizza: state.pizza.sort((a, b) => b.price - a.price),
                }));
                break;
        }
    },
    setCurrentItem: (index) => set({ currentItem: index }),
}));

export const usePizzaMockup = create<PizzaMockup>((set) => ({
    currentState: 0,
    isActiveMockup: false,
    setActiveMockup: () =>
        set((state) => ({ isActiveMockup: !state.isActiveMockup })),
}));

export const usePizzaCart = create<PizzaCartStore>()((set) => ({
    addedPizza: [],
    totalPrice: 0,
    cartQuantity: 0,

    addPizza: (pizza) =>
        set((state) => {
            const existing = state.addedPizza.find(
                (item) => item.id === pizza.id,
            );
            if (existing) {
                return {
                    addedPizza: state.addedPizza.map((item) =>
                        item.id === pizza.id
                            ? { ...item, quantity: (item.quantity ?? 0) + 1 }
                            : item,
                    ),
                };
            }
            return {
                addedPizza: [...state.addedPizza, { ...pizza, quantity: 1 }],
            };
        }),

    setTotalPrice: () =>
        set((state) => {
            return {
                totalPrice: state.addedPizza.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0,
                ),
            };
        }),

    setCartQuantity: () =>
        set((state) => {
            const cartArray = [
                ...state.addedPizza.map((item) => item.quantity),
            ];

            return {
                cartQuantity: cartArray.reduce((acc, value) => acc + value, 0),
            };
        }),
}));

import { create } from "zustand";
import { PizzaCartStore, PizzaStore } from "../types/store.types";

export const usePizzaData = create<PizzaStore>()((set) => ({
    pizza: [],
    currentState: 0,
    isActiveMockup: false,
    currentItem: "популярности",
    setPizza: (pizza) => set(() => ({ pizza })),
    setActiveMockup: () =>
        set((state) => ({ isActiveMockup: !state.isActiveMockup })),
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

export const usePizzaCart = create<PizzaCartStore>()((set) => ({
    addedPizza: [],
    totalPrice: 0,
    pizzaquantity: 0,

    addPizza: (pizza) =>
        set((state) => {
            for (let i = 0; i < state.addedPizza.length; i++) {
                if (state.addedPizza[i].id === pizza.id) {
                    return {
                        addedPizza: [...state.addedPizza],
                        pizzaquantity: state.addedPizza.length + 1,
                    };
                }
            }
            return { addedPizza: [...state.addedPizza, pizza] };
        }),

    setTotalPrice: (price) =>
        set((state) => ({
            totalPrice: state.addedPizza.reduce(
                (total, pizza) => total + pizza.price,
                price,
            ),
        })),
    setPizzaQuantity: (quantity) =>
        set((state) => ({ pizzaquantity: state.addedPizza.length })),
}));

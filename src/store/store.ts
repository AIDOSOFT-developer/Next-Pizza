import { create } from "zustand";
import { PizzaCartStore, PizzaMockup, PizzaStore } from "../types/store.types";

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

import { create } from "zustand";
import { IPizzaDTO } from "@/src/types/pizza";

interface PizzaStore {
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

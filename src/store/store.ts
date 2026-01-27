import { create } from "zustand";
import { IPizzaDTO } from "@/src/types/pizza";

interface PizzaStore {
    pizza: IPizzaDTO[];
    currentState: number;
    setPizza: (pizza: IPizzaDTO[]) => void;
    setCurrentState: (index: number) => void;
    setCategoryActive: (id: number) => void;
}

interface CurrentState {
    currentState: number;
    setCurrentState: (index: number) => void;
    setCategoryActive: (id: number) => void;
}

interface CurrentSortStore {
    currentItem: string;
    isActive: boolean;
    setCurrentState: (index: string) => void;
    setActive: () => void;
}

export const usePizzaData = create<PizzaStore>()((set) => ({
    pizza: [],
    currentState: 0,
    setPizza: (pizza) => set(() => ({ pizza })),
    setCurrentState: (index) => set(() => ({ currentState: index })),
    setCategoryActive: (id) =>
        set((state) => ({
            pizza: state.pizza.map((item) =>
                item.id === id ? { ...item } : item,
            ),
        })),
}));

export const useSortStore = create<CurrentSortStore>()((set) => ({
    currentItem: "популярности",
    isActive: false,
    setCurrentState: (string) => set(() => ({ currentItem: string })),
    setActive: () => set((state) => ({ isActive: !state.isActive })),
}));

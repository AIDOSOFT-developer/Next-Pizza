import { create } from "zustand";

interface CurrentState {
    currentState: number;
    setCurrentState: (index: number) => void;
}

interface CurrentSortStore {
    currentItem: string;
    isActive: boolean;
    setCurrentState: (index: string) => void;
    setActive: () => void;
}

export const useCategoryState = create<CurrentState>()((set) => ({
    currentState: 0,
    setCurrentState: (index) => set(() => ({ currentState: index })),
}));

export const useSortStore = create<CurrentSortStore>()((set) => ({
    currentItem: "популярности",
    isActive: false,
    setCurrentState: (string) => set(() => ({ currentItem: string })),
    setActive: () => set((state) => ({ isActive: !state.isActive })),
}));

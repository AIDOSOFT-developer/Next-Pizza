"use client";

import { sort } from "@/src/constants/constants";
import { useSortStore } from "@/src/store/store";

export default function Sort() {
    const { currentItem, isActive, setCurrentState, setActive } =
        useSortStore();

    return (
        <div className="relative">
            <h4 className="text-sm flex gap-2.5">
                Сортировка по:
                <span
                    className="text-orange border-b border-dashed cursor-pointer select-none"
                    onClick={() => setActive()}
                >
                    {currentItem}
                </span>
            </h4>

            {isActive && (
                <ul className="py-2.5 shadow-xl rounded-2xl bg-white font-bold text-sm absolute top-8 right-0 z-10 cursor-pointer select-none">
                    {sort.map((item) => (
                        <li
                            key={item}
                            className={`px-3.75 py-2.5 ${currentItem === item ? "bg-orange/10 text-orange" : ""}`}
                            onClick={() => {
                                setCurrentState(item);
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

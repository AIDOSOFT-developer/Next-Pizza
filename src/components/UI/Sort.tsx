"use client";

import { SORT } from "@/src/constants/constants";
import { usePizzaData, usePizzaMockup } from "@/src/store/store";

export default function Sort() {
    const { currentItem, setCurrentItem, sortPizza } = usePizzaData();
    const { isActiveMockup, setActiveMockup } = usePizzaMockup();

    return (
        <div className="relative">
            <h4 className="flex gap-2.5 text-sm">
                Сортировка по:
                <span
                    className="text-orange cursor-pointer border-b border-dashed select-none"
                    onClick={() => setActiveMockup()}
                >
                    {currentItem}
                </span>
            </h4>

            {isActiveMockup && (
                <ul className="absolute top-8 right-0 z-10 cursor-pointer rounded-2xl bg-white py-2.5 text-sm font-bold shadow-xl select-none">
                    {SORT.map((item) => (
                        <li
                            key={item}
                            className={`px-3.75 py-2.5 ${currentItem === item ? "bg-orange/10 text-orange" : ""}`}
                            onClick={() => {
                                setCurrentItem(item);
                                sortPizza(item);
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

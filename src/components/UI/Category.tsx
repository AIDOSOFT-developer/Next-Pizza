"use client";

import { CATEGORY } from "@/src/constants/constants";
import { usePizzaData } from "@/src/store/store";

export default function Category() {
    const { currentState, setCurrentState, sortCategoryPizza } = usePizzaData();

    return (
        <ul className="flex w-full gap-2.5 overflow-x-scroll sm:w-1/2 md:w-2/3 lg:overflow-hidden">
            {CATEGORY.map((item, index) => (
                <li
                    className={`px-7 py-3 ${index === currentState ? "bg-black text-white" : "bg-silver"} cursor-pointer rounded-full font-bold select-none`}
                    key={item}
                    onClick={() => {
                        (setCurrentState(index), sortCategoryPizza(index));
                    }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

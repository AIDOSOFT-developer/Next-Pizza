"use client";

import { category } from "@/src/constants/constants";
import { useCategoryState } from "@/src/store/store";

export default function Category() {
    const { currentState, setCurrentState } = useCategoryState();

    return (
        <ul className="flex gap-2.5">
            {category.map((item, index) => (
                <li
                    className={`px-7 py-3 ${index === currentState ? "bg-black text-white" : "bg-silver"} select-none cursor-pointer rounded-full font-bold`}
                    key={item}
                    onClick={() => {
                        (setCurrentState(index), console.log(currentState));
                    }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

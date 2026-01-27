"use client";

import { IPizzaDTO } from "@/src/types/pizza";
import { Button } from "./Button";

import Image from "next/image";
import { usePizzaData } from "@/src/store/store";

export default function Card({ pizza, id }: { pizza: IPizzaDTO; id: number }) {
    const categoryType: Record<number, string> = {
        0: "тонкое",
        1: "традиционный",
    } as const;

    const { setCategoryActive } = usePizzaData();

    return (
        <li className="flex flex-col text-center">
            <Image
                className=" w-full mb-2.5"
                width={260}
                height={260}
                src={pizza.imageUrl}
                alt={pizza.name}
                unoptimized
            />

            <h4 className="mb-5">{pizza.name}</h4>

            <div className="bg-silver p-2 rounded-xl flex flex-col gap-2 mb-3 cursor-pointer select-none">
                <div className="flex justify-between ">
                    {pizza.category.map((type) => (
                        <span key={type} className={` "bg-white" : ""} w-full`}>
                            {categoryType[type]}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between">
                    {pizza.size.map((size) => (
                        <span key={size} className="w-full">
                            {size} см
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center">
                <h3>от {pizza.price}</h3>

                <Button text={"Добавить"} />
            </div>
        </li>
    );
}

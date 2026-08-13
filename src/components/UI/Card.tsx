"use client";

import { IPizzaDTO } from "@/src/types/pizza.types";
import { Button } from "./Button";

import Image from "next/image";
import { useCartPizza } from "@/src/store/store";

export default function Card({ pizza }: { pizza: IPizzaDTO }) {
    const categoryType: Record<number, string> = {
        0: "тонкое",
        1: "традиционный",
    } as const;

    const { addPizza } = useCartPizza();

    return (
        <li className="flex flex-col text-center">
            <Image
                className="mb-2.5 w-full"
                width={260}
                height={260}
                src={pizza.imageUrl}
                alt={pizza.name}
                unoptimized
            />

            <h4 className="mb-5">{pizza.name}</h4>

            <div className="bg-silver mb-3 flex cursor-pointer flex-col gap-2 rounded-xl p-2 select-none">
                <div className="flex justify-between">
                    {pizza.type.map((type) => (
                        <span key={type} className={`w-full`}>
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

            <div className="flex items-center justify-between">
                <h3>от {pizza.price}</h3>

                <Button
                    onClick={() => addPizza(pizza)}
                    text={"Добавить"}
                    variant={"outline"}
                    size={"sm"}
                />
            </div>
        </li>
    );
}

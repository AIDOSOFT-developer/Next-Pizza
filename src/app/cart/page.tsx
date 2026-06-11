"use client";

import { usePizzaCart } from "@/src/store/store";
import Image from "next/image";

export default function Cart() {
    const { addedPizza, totalPrice } = usePizzaCart();

    return (
        <ul>
            {addedPizza.map((pizza) => (
                <li
                    className="flex items-center justify-between"
                    key={pizza.id}
                >
                    <div className="flex items-center space-x-4">
                        <Image
                            src={pizza.imageUrl}
                            alt={pizza.name}
                            width={80}
                            height={80}
                            unoptimized
                        />

                        <div className="">
                            <h3 className="font-bold">{pizza.name}</h3>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="button-input">-</button>
                        <input
                            className="inline-block w-3 text-center font-bold"
                            type="text"
                            value={totalPrice}
                            onChange={(event) => event.target.value}
                        />
                        <button className="button-input">+</button>
                    </div>

                    <div className="">
                        <p>${pizza.price}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

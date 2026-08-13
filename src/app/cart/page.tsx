"use client";

import illustration from "@/public/order.png";
import Image from "next/image";
import { Button } from "@/src/components/UI/Button";
import { useCartPizza } from "@/src/store/store";

export default function Cart() {
    const { cart, addPizza, decreasePizza } = useCartPizza();

    const totalPrice = cart.reduce(
        (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
        0,
    );

    const height = 102;
    let marginInline = 80;

    return (
        <>
            {cart.length > 0 ? (
                <ul className="flex flex-col gap-y-5">
                    {cart.map((pizza) => (
                        <li
                            className="flex items-center justify-between border-b border-gray-400 pb-1"
                            key={pizza.id}
                        >
                            <div className="flex w-1/4 items-center space-x-4">
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

                            <div className="flex w-40 justify-center gap-2">
                                <button
                                    onClick={() => decreasePizza(pizza)}
                                    className="button-input"
                                >
                                    -
                                </button>
                                <input
                                    className="inline-block w-5 text-center font-bold"
                                    type="text"
                                    value={pizza.quantity}
                                    onChange={(event) => event.target.value}
                                />
                                <button
                                    onClick={() => addPizza(pizza)}
                                    className="button-input"
                                >
                                    +
                                </button>
                            </div>

                            <div className="flex w-1/5 justify-end">
                                <p className="text-xl font-bold">
                                    ${pizza.price * pizza.quantity}
                                </p>
                            </div>
                        </li>
                    ))}

                    <div className="flex justify-end">
                        <p className="text-xl">
                            Общая сумма составляет:
                            <span className="ml-4 text-2xl font-bold">
                                {totalPrice}$
                            </span>
                        </p>
                    </div>
                </ul>
            ) : (
                <div
                    style={{
                        height: `calc(${height}dvh - ${marginInline}px)`,
                    }}
                    className={`flex items-center justify-center text-center`}
                >
                    <div className="flex w-1/2 flex-col items-center justify-center">
                        <h1 className="mb-2.5">Корзина пустая 😕</h1>
                        <p className="text-gray mb-10">
                            Вероятней всего, вы не заказывали ещё пиццу. Для
                            того, чтобы заказать пиццу, перейди на главную
                            страницу.
                        </p>

                        <Image
                            className="mb-20"
                            src={illustration}
                            width={300}
                            height={255}
                            alt="Illustraion"
                            unoptimized
                        />

                        <Button
                            text={"Вернуться назад"}
                            variant={"secondary"}
                            size={"sm"}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

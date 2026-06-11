"use client";

import Image from "next/image";
import CartIcon from "@/public/icons/cart.svg";
import { usePizzaCart } from "@/src/store/store";
import Link from "next/link";

export function Button({
    text,
    onClick,
}: {
    text: string;
    onClick: () => void;
}) {
    return (
        <button
            className="border-orange text-orange button-inline-hover rounded-full border-2 px-4 py-2.5 font-bold"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export function CartButton() {
    const { totalPrice, pizzaQuantity } = usePizzaCart();

    return (
        <Link
            href={"/cart"}
            className="bg-orange button-hover flex items-center justify-around gap-3 rounded-full px-3 py-2 font-bold text-white md:px-5 md:py-3.75"
        >
            <div className="">{totalPrice} $</div>
            <span className="h-6.5 w-px bg-white/25" />
            <div className="flex gap-2">
                <Image
                    width={16}
                    height={16}
                    src={CartIcon}
                    alt="Cart Icon"
                    unoptimized
                />
                {pizzaQuantity}
            </div>
        </Link>
    );
}

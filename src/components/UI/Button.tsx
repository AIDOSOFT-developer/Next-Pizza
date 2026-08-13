"use client";

import Image from "next/image";
import CartIcon from "@/public/icons/cart.svg";
// import { usePizzaCart } from "@/src/store/store";
import Link from "next/link";
import { IButtonProps } from "@/src/types/button.types";
import { SIZES, VARIANTS } from "@/src/constants/constants";
import { useCartPizza } from "@/src/store/store";

export function Button({ text, size, variant, onClick }: IButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${VARIANTS[variant]} ${SIZES[size]}`}
        >
            {text}
        </button>
    );
}

export function CartButton({ variant, size }: IButtonProps) {
    const { cart } = useCartPizza();

    const totalPrice = cart.reduce(
        (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
        0,
    );

    const quantity = cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

    return (
        <Link href={"/cart"} className={`${VARIANTS[variant]} ${SIZES[size]}`}>
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

                {quantity}
            </div>
        </Link>
    );
}

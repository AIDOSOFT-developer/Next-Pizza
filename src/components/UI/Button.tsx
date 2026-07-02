"use client";

import Image from "next/image";
import CartIcon from "@/public/icons/cart.svg";
import { usePizzaCart } from "@/src/store/store";
import Link from "next/link";
import { IButtonProps } from "@/src/types/button.types";
import { SIZES, VARIANTS } from "@/src/constants/constants";

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
    const { totalPrice, cartQuantity } = usePizzaCart();

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
                {cartQuantity}
            </div>
        </Link>
    );
}

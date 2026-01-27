import Image from "next/image";
import CartIcon from "@/public/icons/cart.svg";

export function Button({ text }: { text: string }) {
    return (
        <button className="px-4 py-2.5 border-2 border-orange rounded-full font-bold text-orange button-inline-hover">
            {text}
        </button>
    );
}

export function CartButton() {
    return (
        <button className="px-3 py-2 md:px-5 md:py-3.75 bg-orange button-hover justify-around  text-white rounded-full font-bold flex gap-3 items-center">
            <div className="">550 $</div>
            <span className="w-px h-6.5 bg-white/25" />
            <div className="flex gap-2">
                <Image
                    width={16}
                    height={16}
                    src={CartIcon}
                    alt="Cart Icon"
                    unoptimized
                />
                1
            </div>
        </button>
    );
}

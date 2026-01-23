import Image from "next/image";
import CartIcon from "@/public/icons/cart.svg";

export function Button() {
    return <div className=""></div>;
}

export function CartButton() {
    return (
        <button className="px-5 py-3.75 bg-orange button-hover text-white rounded-full font-bold flex gap-3 items-center">
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

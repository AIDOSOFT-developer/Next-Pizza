import { CartButton } from "../components/UI/Button";
import Logo from "../components/UI/Logo";

export default function Home() {
    const height = 100;
    let marginInline = 2 * 30;

    return (
        <div
            className={`container rounded-xl p-7.5 bg-white h-[calc(${height}vh-${marginInline}px)] mx-auto m-7.5`}
        >
            <div className="flex justify-between">
                <Logo />
                <CartButton />
            </div>
        </div>
    );
}

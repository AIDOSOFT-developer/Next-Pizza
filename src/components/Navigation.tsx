import Logo from "./UI/Logo";
import { CartButton } from "./UI/Button";

export default function Navigation() {
    return (
        <nav className="border-silver mb-4 flex flex-col justify-between gap-2 border-b-2 pb-4 sm:flex-row md:mb-10 md:pb-10">
            <Logo />
            <CartButton text={""} variant={"cart"} size={"lg"} />
        </nav>
    );
}

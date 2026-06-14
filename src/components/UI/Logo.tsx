import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

export default function Logo() {
    return (
        <Link className="flex items-center gap-3.75" href={"/"}>
            <Image width={40} height={40} src={logo} alt="Logo" unoptimized />

            <div className="">
                <h2>NEXT PIZZA</h2>
                <p className="text-gray">made by AIDOSOFT</p>
            </div>
        </Link>
    );
}

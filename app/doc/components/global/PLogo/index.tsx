import Link from "next/link";
import Logo from "./Logo";

function PLogo(){
    return (
        <Link href="/" className="flex gap-2 items-end">
            <Logo />
            <span className="text-sm font-bold">(Alpha)</span>
        </Link>
    )
}

export default PLogo;
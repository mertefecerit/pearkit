import Link from "next/link";
import Logo from "./Logo";

function PLogo(){
    return (
        <Link href="/" className="flex gap-2 items-end">
            <Logo />
        </Link>
    )
}

export default PLogo;
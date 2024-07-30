import Link from "next/link";
import Logo from "@/app/doc/components/global/BuiLogo/Logo";

function BuiLogo(){
    return (
        <Link href="/" className="flex gap-2 items-end">
            <Logo />
            <span className="text-sm font-bold">(Alpha)</span>
        </Link>
    )
}

export default BuiLogo;
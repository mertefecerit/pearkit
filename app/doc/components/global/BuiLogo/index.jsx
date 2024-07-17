import Link from "next/link";
import FullLogo from "@/app/doc/components/global/BuiLogo/FullLogo";
import Logo from "@/app/doc/components/global/BuiLogo/Logo";

function BuiLogo(){
    return (
        <Link href="/" className="flex gap-2 items-end">
            <FullLogo />
            <Logo />
            <span className="text-sm font-bold">(Alpha)</span>
        </Link>
    )
}

export default BuiLogo;
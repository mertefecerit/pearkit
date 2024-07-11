import Link from "next/link";
import Image from "next/image";
import LogoSVG from "@/app/assets/images/svgs/logo.svg"
import OnlyLogo from "@/app/assets/images/svgs/only-logo.svg"

function BuiLogo(){
    return (
        <Link href="/">
            <Image className="hidden lg:block" priority src={LogoSVG} alt="bubble-ui-logo" height={60}></Image>
            <Image className="lg:hidden block" priority src={OnlyLogo} alt="bubble-ui-logo" height={60}></Image>
        </Link>
    )
}

export default BuiLogo;
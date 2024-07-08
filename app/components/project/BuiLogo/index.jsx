import Link from "next/link";
import Image from "next/image";
import LogoSVG from "../../../assets/images/svgs/logo.svg"

function BuiLogo(){
    return (
        <Link href="/">
            <Image priority src={LogoSVG} alt="bubble-ui-logo" height={60}></Image>
        </Link>
    )
}

export default BuiLogo;
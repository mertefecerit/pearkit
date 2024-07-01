import Link from "next/link";
import Image from "next/image";
import LogoSVG from "../../assets/images/svgs/logo.svg"

function BLogo(){
    return (
        <Link href="/">
            <Image src={LogoSVG} alt="bubble-ui-logo" height={60}></Image>
        </Link>
    )
}

export default BLogo;
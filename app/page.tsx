import BuiLogo from "@/app/doc/components/global/BuiLogo";
import Link from "next/link";
import {Icon} from "@iconify/react";

export default function HomePage() {
    return (
        <div className="h-dvh flex flex-col gap-8 items-center justify-center dark:bg-gray-900">
            <BuiLogo/>
            <nav className="font-bold text-xl">
                <Link className="inline-flex items-center gap-2 hover:text-blue-500 transition-all" href="/doc/getting-started/installation">
                    <Icon icon="mdi:cursor-default-click" width={25}></Icon>
                    <span>Click for Documents</span>
                </Link>
            </nav>
        </div>
    )
}
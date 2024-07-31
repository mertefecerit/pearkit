import PLogo from "@/app/doc/components/global/PLogo";
import {Icon} from "@iconify/react";
import {PButton} from "@/app/components/src";
import React from "react";
import PDarkModeToggle from "@/app/doc/layout-partials/PDarkModeToggle";
import Npm from "@/app/npm";

export default function HomePage() {
    return (
        <div className="bg-custom-gradient h-dvh flex flex-col gap-8 items-center pt-28 dark:bg-custom-gradient-dark">
            <PLogo/>
            <div className="flex gap-2">
                <PButton
                    startIcon={<Icon icon="mdi:file-document-box-search-outline" width={25}/>}
                    href={"/doc/getting-started/installation"}
                    target={"_self"}
                    variant={"outlined"}
                    label={"docs"}
                />
                <PButton
                    startIcon={<Icon icon="mdi:github" width={25}/>}
                    href={"https://github.com/mertefecerit/pearkit"}
                    variant={"outlined"}
                />
                <PButton
                    startIcon={<Icon icon="mdi:npm" width={25}/>}
                    href={"https://www.npmjs.com/package/pearkit"}
                    variant={"outlined"}
                />
                <PDarkModeToggle/>
            </div>
            <Npm />
        </div>
    )
}
import PLogo from "@/app/doc/components/global/PLogo";
import {Icon} from "@iconify/react";
import {PButton} from "@/app/components/src";
import React from "react";

export default function HomePage() {
    return (
        <div className="bg-custom-gradient h-dvh flex flex-col gap-8 items-center pt-20 dark:bg-gray-900">
            <PLogo/>
            <div className="flex gap-2">
                <PButton
                    startIcon={<Icon icon="mdi:github" width={25}/>}
                    href={"https://github.com/mertefecerit/pearkit"}
                    variant={"outlined"}
                    label={"github"}
                />
                <PButton
                    startIcon={<Icon icon="mdi:npm" width={25}/>}
                    href={"https://www.npmjs.com/package/pearkit"}
                    variant={"outlined"}
                    label={"npm"}
                />
                <PButton
                    startIcon={<Icon icon="mdi:file-document-box-search-outline" width={25}/>}
                    href={"/doc/getting-started/installation"}
                    target={"_self"}
                    variant={"outlined"}
                    label={"docs"}
                />
            </div>
        </div>
    )
}
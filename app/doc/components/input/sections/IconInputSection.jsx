"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiTag} from "@/app/components/src";
import {Icon} from "@iconify/react";

function IconInputSection() {
    const codeBlock = `<BuiInput icon={<Icon icon="mdi:envelope"/>} />`
    return (
        <BuiComponentShowcaseArea
            anchor="icon"
            title="Icon"
            desc={<>Is it possible without an <BuiTag>icon</BuiTag> ? Of course not :) Here is how to use it with an <BuiTag>icon</BuiTag>.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <BuiInput icon={<Icon icon="mdi:envelope"/>} placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput icon={<Icon icon="mdi:envelope"/>} variant="underlined" placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput icon={<Icon icon="mdi:envelope"/>} variant="filled" placeholder="example@bubbleui.com" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default IconInputSection;
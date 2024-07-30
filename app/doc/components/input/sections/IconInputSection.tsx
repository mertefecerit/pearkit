"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PInput from "@/app/components/src/PInput";
import {PTag} from "@/app/components/src";
import {Icon} from "@iconify/react";

function IconInputSection() {
    const codeBlock = `<PInput icon={<Icon icon="mdi:envelope"/>} />`
    return (
        <PComponentShowcaseArea
            anchor="icon"
            title="Icon"
            desc={<>Is it possible without an <PTag label={"icon"}/> ? Of course not :) Here is how to use it with an <PTag label={"icon"}/>.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <PInput icon={<Icon icon="mdi:envelope"/>} placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput icon={<Icon icon="mdi:envelope"/>} variant="underlined" placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput icon={<Icon icon="mdi:envelope"/>} variant="filled" placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </PComponentShowcaseArea>
    );
}

export default IconInputSection;
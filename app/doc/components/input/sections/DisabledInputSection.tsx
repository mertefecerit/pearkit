"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PInput from "@/app/components/src/PInput";
import {PTag} from "@/app/components/src";

function DisabledInputSection() {
    const codeBlock = `<PInput disabled/>`
    return (
        <PComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>For the <PTag label={"disabled"}/> property, it is sufficient to provide the property itself directly.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <PInput disabled placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput disabled variant="underlined" placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput disabled variant="filled" placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </PComponentShowcaseArea>
    );
}

export default DisabledInputSection;
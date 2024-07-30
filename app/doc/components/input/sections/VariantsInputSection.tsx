"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PInput from "@/app/components/src/PInput";
import {PTag} from "@/app/components/src";

function VariantsInputSection() {
    const codeBlock = `<PInput />
<PInput variant="underlined" />
<PInput variant="filled" />`
    return (
        <PComponentShowcaseArea
            anchor="variants"
            title="Variant"
            desc={<>We created 3 variants, thinking that you can make different designs. <PTag label={"outlined"}/> is used by default. The other two are <PTag label={"underlined"}/> and <PTag label={"filled"}/> options.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <PInput placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput variant="underlined" placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput variant="filled" placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </PComponentShowcaseArea>
    );
}

export default VariantsInputSection;
"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiTag} from "@/app/components/src";

function VariantsInputSection() {
    const codeBlock = `<BuiInput />
<BuiInput variant="underlined" />
<BuiInput variant="filled" />`
    return (
        <BuiComponentShowcaseArea
            anchor="variants"
            title="Variant"
            desc={<>We created 3 variants, thinking that you can make different designs. <BuiTag label={"outlined"}/> is used by default. The other two are <BuiTag label={"underlined"}/> and <BuiTag label={"filled"}/> options.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <BuiInput placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput variant="underlined" placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput variant="filled" placeholder="example@bubbleui.com" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default VariantsInputSection;
"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiCode} from "@/app/components/src";

function VariantsInputSection() {
    const codeBlock = `<BuiInput />
<BuiInput variant="underlined" />
<BuiInput variant="filled" />`
    return (
        <BuiComponentShowcaseArea
            anchor="variants"
            title="Variant"
            desc={<>We created 3 variants, thinking that you can make different designs. <BuiCode>outlined</BuiCode> is used by default. The other two are <BuiCode>underlined</BuiCode> and <BuiCode>filled</BuiCode> options.</>}
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
"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiCode} from "@/app/components/src";

function SizesInputSection() {
    const codeBlock = `<BuiInput placeholder="example@bubbleui.com" onChange={(e) => console.log(e.target.value)}/>`
    return (
        <BuiComponentShowcaseArea
            anchor="sizes"
            title="Sizes"
            desc={<>The input component comes with 3 different size options. These are <BuiCode>sm</BuiCode>, <BuiCode>base</BuiCode> and <BuiCode>lg</BuiCode>. By default <BuiCode>base</BuiCode> works.</>}
            codeBlock={codeBlock}
        >
            <div className="w-[300px] flex gap-4 flex-col">
                <BuiInput size="sm" placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput size="lg" placeholder="example@bubbleui.com" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default SizesInputSection;
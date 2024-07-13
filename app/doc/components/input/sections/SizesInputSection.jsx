"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiCode} from "@/app/components/src";

function SizesInputSection() {
    const codeBlock = `<BuiInput size="sm"/>
<BuiInput />
<BuiInput size="lg"/>`
    return (
        <BuiComponentShowcaseArea
            anchor="sizes"
            title="Sizes"
            desc={<>The input component comes with 3 different size options. These
                are <BuiCode>sm</BuiCode>, <BuiCode>base</BuiCode> and <BuiCode>lg</BuiCode>. By
                default <BuiCode>base</BuiCode> works.</>}
            codeBlock={codeBlock}
        >
            <div className="flex gap-2 flex-wrap w-full justify-center">
                <div className="lg:w-[200px] w-full flex gap-4 flex-col">
                    <BuiInput size="sm" placeholder="example@bubbleui.com" onChange={() => null}/>
                    <BuiInput placeholder="example@bubbleui.com" onChange={() => null}/>
                    <BuiInput size="lg" placeholder="example@bubbleui.com" onChange={() => null}/>
                </div>
                <div className="lg:w-[200px] w-full flex gap-4 flex-col">
                    <BuiInput variant="underlined" size="sm" placeholder="example@bubbleui.com" onChange={() => null}/>
                    <BuiInput variant="underlined" placeholder="example@bubbleui.com" onChange={() => null}/>
                    <BuiInput variant="underlined" size="lg" placeholder="example@bubbleui.com" onChange={() => null}/>
                </div>
                <div className="lg:w-[200px] w-full flex gap-4 flex-col">
                    <BuiInput variant="filled" size="sm" placeholder="example@bubbleui.com" onChange={() => null}/>
                    <BuiInput variant="filled" placeholder="example@bubbleui.com" onChange={() => null}/>
                    <BuiInput variant="filled" size="lg" placeholder="example@bubbleui.com" onChange={() => null}/>
                </div>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default SizesInputSection;
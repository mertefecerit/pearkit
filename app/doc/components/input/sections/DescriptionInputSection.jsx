"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiCode} from "@/app/components/src";

function DescriptionInputSection() {
    const codeBlock = `<BuiInput description="Please add valid email address"/>`
    return (
        <BuiComponentShowcaseArea
            anchor="description"
            title="Description"
            desc={<>By adding a <BuiCode>description</BuiCode> property, you can specify a situation that needs attention for the input.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <BuiInput description="Please add valid email address" placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput description="Please add valid email address" variant="underlined" placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput description="Please add valid email address" variant="filled" placeholder="example@bubbleui.com" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default DescriptionInputSection;
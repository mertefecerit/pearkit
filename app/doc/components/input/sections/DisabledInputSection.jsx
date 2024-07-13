"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiCode} from "@/app/components/src";

function DisabledInputSection() {
    const codeBlock = `<BuiInput disabled/>`
    return (
        <BuiComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>For the <BuiCode>disabled</BuiCode> property, it is sufficient to provide the property itself directly.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <BuiInput disabled placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput disabled variant="underlined" placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput disabled variant="filled" placeholder="example@bubbleui.com" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default DisabledInputSection;
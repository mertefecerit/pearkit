"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiTag} from "@/app/components/src";

function LabelInputSection() {
    const codeBlock = `<BuiInput label="Email"/>`
    return (
        <BuiComponentShowcaseArea
            anchor="label"
            title="Label"
            desc={<>You can declare what the input is about by adding a <BuiTag>label</BuiTag> property.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <BuiInput label="Email" placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput label="Email" variant="underlined" placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput label="Email" variant="filled" placeholder="example@bubbleui.com" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default LabelInputSection;
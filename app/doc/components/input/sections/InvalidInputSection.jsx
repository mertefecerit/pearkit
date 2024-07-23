"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiTag} from "@/app/components/src";

function InvalidInputSection() {
    const codeBlock = `<BuiInput isInvalid={true} />`
    return (
        <BuiComponentShowcaseArea
            anchor="invalid"
            title="Invalid"
            desc={<>You can use the <BuiTag>isInvalid</BuiTag> property when using input validation on a form element.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <BuiInput isInvalid={true} placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput isInvalid={true} variant="underlined" placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput isInvalid={true} variant="filled" placeholder="example@bubbleui.com" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default InvalidInputSection;
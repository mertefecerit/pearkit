"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiTag} from "@/app/components/src";

function LoadingInputSection() {
    const codeBlock = `<BuiInput isLoading={true}/>`
    return (
        <BuiComponentShowcaseArea
            anchor="loading"
            title="Loading"
            desc={<>Considering that you are using server-side validation for the input component, we thought you would need an <BuiTag>isLoading</BuiTag> feature. :)</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <BuiInput isLoading={true} placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput isLoading={true} variant="underlined" placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput isLoading={true} variant="filled" placeholder="example@bubbleui.com" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default LoadingInputSection;
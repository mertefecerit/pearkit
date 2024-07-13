"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiCode} from "@/app/components/src";

function ErrorsInputSection() {
    const codeBlock = `<BuiInput errors={['Error 1', 'Error 2']} />`
    return (
        <BuiComponentShowcaseArea
            anchor="errors"
            title="Errors"
            desc={<>Or you can write errors by filling in the <BuiCode>errors</BuiCode> property. This option puts the component in invalid state without looking at the <BuiCode>isInvalid</BuiCode> property.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <BuiInput errors={['Error 1', 'Error 2']} placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput errors={['Error 1', 'Error 2']} variant="underlined" placeholder="example@bubbleui.com" onChange={() => null}/>
                <BuiInput errors={['Error 1', 'Error 2']} variant="filled" placeholder="example@bubbleui.com" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default ErrorsInputSection;
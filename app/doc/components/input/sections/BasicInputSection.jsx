"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";

function BasicInputSection() {
    const codeBlock = `<BuiInput placeholder="example@bubbleui.com" onChange={(e) => console.log(e.target.value)}/>`
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>It is the standard input element that you can use in forms. Gets all form attributes.</>}
            codeBlock={codeBlock}
        >
            <div className="max-w-[400px]">
                <BuiInput placeholder="example@bubbleui.com"/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default BasicInputSection;
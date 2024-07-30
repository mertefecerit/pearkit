"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiInput} from "@/app/components/src";

function BasicInputSection() {
    const codeBlock = `<BuiInput placeholder="example@pearkit.com"/>`
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>It is the standard input element that you can use in forms. Gets all form attributes.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex flex-col gap-4">
                <BuiInput placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
);
}

export default BasicInputSection;
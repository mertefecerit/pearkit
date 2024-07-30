"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PInput} from "@/app/components/src";

function BasicInputSection() {
    const codeBlock = `<PInput placeholder="example@pearkit.com"/>`
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>It is the standard input element that you can use in forms. Gets all form attributes.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex flex-col gap-4">
                <PInput placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </PComponentShowcaseArea>
);
}

export default BasicInputSection;
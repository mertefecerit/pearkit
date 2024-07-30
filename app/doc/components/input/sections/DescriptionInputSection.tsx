"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PInput from "@/app/components/src/PInput";
import {PTag} from "@/app/components/src";

function DescriptionInputSection() {
    const codeBlock = `<PInput description="Please add valid email address"/>`
    return (
        <PComponentShowcaseArea
            anchor="description"
            title="Description"
            desc={<>By adding a <PTag label={"description"}/> property, you can specify a situation that needs attention for the input.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <PInput description="Please add valid email address" placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput description="Please add valid email address" variant="underlined" placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput description="Please add valid email address" variant="filled" placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </PComponentShowcaseArea>
    );
}

export default DescriptionInputSection;
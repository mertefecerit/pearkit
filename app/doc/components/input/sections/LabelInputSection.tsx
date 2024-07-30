"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PInput from "@/app/components/src/PInput";
import {PTag} from "@/app/components/src";

function LabelInputSection() {
    const codeBlock = `<PInput label="Email"/>`
    return (
        <PComponentShowcaseArea
            anchor="label"
            title="Label"
            desc={<>You can declare what the input is about by adding a <PTag label="label" /> property.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <PInput label="Email" placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput label="Email" variant="underlined" placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput label="Email" variant="filled" placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </PComponentShowcaseArea>
    );
}

export default LabelInputSection;
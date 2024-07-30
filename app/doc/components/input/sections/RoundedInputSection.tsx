"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PInput from "@/app/components/src/PInput";
import {PTag} from "@/app/components/src";

function RoundedInputSection() {
    const codeBlock = `<PInput rounded />
<PInput rounded variant="underlined" />
<PInput rounded variant="filled" />`
    return (
        <PComponentShowcaseArea
            anchor="rounded"
            title="Rounded"
            desc={<>For fully <PTag label="rounded"/> edges, you can use the rounded property.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <PInput rounded placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput rounded variant="underlined" placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput rounded variant="filled" placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </PComponentShowcaseArea>
    );
}

export default RoundedInputSection;
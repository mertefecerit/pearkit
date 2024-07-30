"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiTag} from "@/app/components/src";

function RoundedInputSection() {
    const codeBlock = `<BuiInput rounded />
<BuiInput rounded variant="underlined" />
<BuiInput rounded variant="filled" />`
    return (
        <BuiComponentShowcaseArea
            anchor="rounded"
            title="Rounded"
            desc={<>For fully <BuiTag label="rounded"/> edges, you can use the rounded property.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <BuiInput rounded placeholder="example@pearkit.com" onChange={() => null}/>
                <BuiInput rounded variant="underlined" placeholder="example@pearkit.com" onChange={() => null}/>
                <BuiInput rounded variant="filled" placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default RoundedInputSection;
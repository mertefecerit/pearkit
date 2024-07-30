"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PInput from "@/app/components/src/PInput";
import {PTag} from "@/app/components/src";

function InvalidInputSection() {
    const codeBlock = `<PInput isInvalid={true} />`
    return (
        <PComponentShowcaseArea
            anchor="invalid"
            title="Invalid"
            desc={<>You can use the <PTag label={"isInvalid"}/> property when using input validation on a form element.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <PInput isInvalid={true} placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput isInvalid={true} variant="underlined" placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput isInvalid={true} variant="filled" placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </PComponentShowcaseArea>
    );
}

export default InvalidInputSection;
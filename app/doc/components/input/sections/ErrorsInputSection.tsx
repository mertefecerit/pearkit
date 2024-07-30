"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PInput from "@/app/components/src/PInput";
import {PTag} from "@/app/components/src";

function ErrorsInputSection() {
    const codeBlock = `<PInput errors={['Error 1', 'Error 2']} />`
    return (
        <PComponentShowcaseArea
            anchor="errors"
            title="Errors"
            desc={<>Or you can write errors by filling in the <PTag label={"errors"} /> property. This option puts the component in invalid state without looking at the <PTag label={"isInvalid"}/> property.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <PInput errors={['Error 1', 'Error 2']} placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput errors={['Error 1', 'Error 2']} variant="underlined" placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput errors={['Error 1', 'Error 2']} variant="filled" placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </PComponentShowcaseArea>
    );
}

export default ErrorsInputSection;
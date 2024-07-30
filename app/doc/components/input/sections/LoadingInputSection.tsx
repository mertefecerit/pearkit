"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PInput from "@/app/components/src/PInput";
import {PTag} from "@/app/components/src";

function LoadingInputSection() {
    const codeBlock = `<PInput isLoading={true}/>`
    return (
        <PComponentShowcaseArea
            anchor="loading"
            title="Loading"
            desc={<>Considering that you are using server-side validation for the input component, we thought you would need an <PTag label={"isLoading"}/> feature. :)</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <PInput isLoading={true} placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput isLoading={true} variant="underlined" placeholder="example@pearkit.com" onChange={() => null}/>
                <PInput isLoading={true} variant="filled" placeholder="example@pearkit.com" onChange={() => null}/>
            </div>
        </PComponentShowcaseArea>
    );
}

export default LoadingInputSection;
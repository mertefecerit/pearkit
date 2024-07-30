"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PInput from "@/app/components/src/PInput";
import {PTag} from "@/app/components/src";

function SizesInputSection() {
    const codeBlock = `<PInput size="sm"/>
<PInput />
<PInput size="lg"/>`
    return (
        <PComponentShowcaseArea
            anchor="sizes"
            title="Sizes"
            desc={<>The input component comes with 3 different size options. These
                are <PTag label={"sm"}/>, <PTag label={"base"}/> and <PTag label={"lg"}/>. By
                default <PTag label={"base"}/> works.</>}
            codeBlock={codeBlock}
        >
            <div className="flex gap-2 flex-wrap w-full justify-center">
                <div className="lg:w-[200px] w-full flex gap-4 flex-col">
                    <PInput size="sm" placeholder="example@pearkit.com" onChange={() => null}/>
                    <PInput placeholder="example@pearkit.com" onChange={() => null}/>
                    <PInput size="lg" placeholder="example@pearkit.com" onChange={() => null}/>
                </div>
                <div className="lg:w-[200px] w-full flex gap-4 flex-col">
                    <PInput variant="underlined" size="sm" placeholder="example@pearkit.com" onChange={() => null}/>
                    <PInput variant="underlined" placeholder="example@pearkit.com" onChange={() => null}/>
                    <PInput variant="underlined" size="lg" placeholder="example@pearkit.com" onChange={() => null}/>
                </div>
                <div className="lg:w-[200px] w-full flex gap-4 flex-col">
                    <PInput variant="filled" size="sm" placeholder="example@pearkit.com" onChange={() => null}/>
                    <PInput variant="filled" placeholder="example@pearkit.com" onChange={() => null}/>
                    <PInput variant="filled" size="lg" placeholder="example@pearkit.com" onChange={() => null}/>
                </div>
            </div>
        </PComponentShowcaseArea>
    );
}

export default SizesInputSection;
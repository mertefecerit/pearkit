"use client";

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTab, PTabs} from "@/app/components/src";

function OverflowTabsSection() {
    const codeBlock = `<PTabs>
    {
        Array.from({length:99},(_, index) => index + 1).map((i) => 
            <PTab key={i} label={'Tab ' + i}>
                <p>{'Tab ' + i} = Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Cum, expedita.</p>
            </PTab>
        )
}
</PTabs>`
    return (
        <PComponentShowcaseArea
            anchor="overflow"
            title="Overflow"
            desc={<>If the component exceeds the size of its container, the scroll function is automatically activated and the relevant buttons appear.</>}
            codeBlock={codeBlock}
        >
            <PTabs>
                {
                    Array.from({length: 99}, (_, index) => index + 1).map((i) => (
                            <PTab key={i} label={'Tab ' + i}>
                                <p>{'Tab ' + i} = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
                                    expedita.</p>
                            </PTab>
                        )
                    )
                }
            </PTabs>
        </PComponentShowcaseArea>
    );
}

export default OverflowTabsSection;
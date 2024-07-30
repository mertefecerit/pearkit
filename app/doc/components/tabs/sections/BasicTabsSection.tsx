"use client";

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTab, PTabs, PTag} from "@/app/components/src";

function BasicTabsSection() {
    const codeBlock = `<PTabs color="orange">
    <PTab label="Tab 1">
        <p>Tab 1 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </PTab>
    <PTab label="Tab 2">
        <p>Tab 2 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </PTab>
    <PTab label="Tab 3">
        <p>Tab 3 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </PTab>
    <PTab label="Tab 4">
        <p>Tab 4 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </PTab>
    <PTab label="Tab 5">
        <p>Tab 5 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </PTab>
</PTabs>`
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<><PTag label="PTabs"/> consists of one or more <PTag label="PTab"/> components.</>}
            codeBlock={codeBlock}
        >
            <PTabs>
                {
                    Array.from({length:5},(_, index) => index + 1).map((i) => (
                        <PTab key={i} label={'Tab ' + i}>
                        <p>{'Tab ' + i} = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                    </PTab>))
                }
            </PTabs>
        </PComponentShowcaseArea>
    );
}

export default BasicTabsSection;
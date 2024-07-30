"use client";

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTab, PTabs, PTag} from "@/app/components/src";
import {useState} from "react";

function ActiveTabsSection() {
    const codeBlock = `const [activeIndex,setActiveIndex] = useState(3);

<PTabs activeTabIndex={activeIndex} onChange={setActiveIndex}>
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

    const [activeIndex,setActiveIndex] = useState(3);
    return (
        <PComponentShowcaseArea
            anchor="active-tab"
            title="Active Tab"
            desc={<>You can determine which tab will be selected when the component is first loaded with the <PTag label="activeTabIndex" /> property. And you can control every index change by connecting it to a state.</>}
            codeBlock={codeBlock}
        >
            <span>Active Index : {activeIndex}</span>
            <PTabs activeTabIndex={activeIndex} onChange={setActiveIndex}>
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
            </PTabs>
        </PComponentShowcaseArea>
    );
}

export default ActiveTabsSection;
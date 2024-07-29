"use client";

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTab, BuiTabs} from "@/app/components/src";
import {useState} from "react";

function ActiveTabsSection() {
    const codeBlock = `const [activeIndex,setActiveIndex] = useState(3);

<BuiTabs activeTabIndex={activeIndex} onChange={setActiveIndex}>
    <BuiTab label="Tab 1">
        <p>Tab 1 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </BuiTab>
    <BuiTab label="Tab 2">
        <p>Tab 2 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </BuiTab>
    <BuiTab label="Tab 3">
        <p>Tab 3 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </BuiTab>
    <BuiTab label="Tab 4">
        <p>Tab 4 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </BuiTab>
    <BuiTab label="Tab 5">
        <p>Tab 5 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </BuiTab>
</BuiTabs>`

    const [activeIndex,setActiveIndex] = useState(3);
    return (
        <BuiComponentShowcaseArea
            anchor="active-tab"
            title="Active Tab"
            desc={<></>}
            codeBlock={codeBlock}
        >
            <span>Active Index : {activeIndex}</span>
            <BuiTabs activeTabIndex={activeIndex} onChange={setActiveIndex}>
                <BuiTab label="Tab 1">
                    <p>Tab 1 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                </BuiTab>
                <BuiTab label="Tab 2">
                    <p>Tab 2 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                </BuiTab>
                <BuiTab label="Tab 3">
                    <p>Tab 3 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                </BuiTab>
                <BuiTab label="Tab 4">
                    <p>Tab 4 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                </BuiTab>
                <BuiTab label="Tab 5">
                    <p>Tab 5 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                </BuiTab>
            </BuiTabs>
        </BuiComponentShowcaseArea>
    );
}

export default ActiveTabsSection;
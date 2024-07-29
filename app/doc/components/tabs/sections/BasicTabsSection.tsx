"use client";

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTab, BuiTabs, BuiTag} from "@/app/components/src";

function BasicTabsSection() {
    const codeBlock = `<BuiTabs color="orange">
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
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<><BuiTag label="BuiTabs"/> consists of one or more <BuiTag label="BuiTab"/> components.</>}
            codeBlock={codeBlock}
        >
            <BuiTabs>
                {
                    Array.from({length:5},(_, index) => index + 1).map((i) => (
                        <BuiTab key={i} label={'Tab ' + i}>
                        <p>{'Tab ' + i} = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                    </BuiTab>))
                }
            </BuiTabs>
        </BuiComponentShowcaseArea>
    );
}

export default BasicTabsSection;
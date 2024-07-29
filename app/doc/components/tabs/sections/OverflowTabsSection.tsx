"use client";

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTab, BuiTabs} from "@/app/components/src";

function OverflowTabsSection() {
    const codeBlock = `<BuiTabs>
    {
        Array.from({length:99},(_, index) => index + 1).map((i) => 
            <BuiTab key={i} label={'Tab ' + i}>
                <p>{'Tab ' + i} = Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Cum, expedita.</p>
            </BuiTab>
        )
}
</BuiTabs>`
    return (
        <BuiComponentShowcaseArea
            anchor="overflow"
            title="Overflow"
            desc={<></>}
            codeBlock={codeBlock}
        >
            <BuiTabs>
                {
                    Array.from({length: 99}, (_, index) => index + 1).map((i) => (
                            <BuiTab key={i} label={'Tab ' + i}>
                                <p>{'Tab ' + i} = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
                                    expedita.</p>
                            </BuiTab>
                        )
                    )
                }
            </BuiTabs>
        </BuiComponentShowcaseArea>
    );
}

export default OverflowTabsSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTabs, BuiTab} from "@/app/components/src";

function DisabledTabsSection() {
    const codeBlock = `<BuiTabs>
    // other tabs
    <BuiTab label="Tab 3" disabled>
        <p>Tab 3 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </BuiTab>
    // other tabs
</BuiTabs>`
    return (
        <BuiComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<></>}
            codeBlock={codeBlock}
        >
            <BuiTabs>
                <BuiTab label="Tab 1">
                    <p>Tab 1 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                </BuiTab>
                <BuiTab label="Tab 2">
                    <p>Tab 2 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                </BuiTab>
                <BuiTab label="Tab 3" disabled>
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

export default DisabledTabsSection;
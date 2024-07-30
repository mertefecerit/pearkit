import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTabs, PTab, PTag} from "@/app/components/src";

function DisabledTabsSection() {
    const codeBlock = `<PTabs>
    // other tabs
    <PTab label="Tab 3" disabled>
        <p>Tab 3 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
    </PTab>
    // other tabs
</PTabs>`
    return (
        <PComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>You can disable the relevant tab by giving the component the <PTag label={"disabled"}/> property.</>}
            codeBlock={codeBlock}
        >
            <PTabs>
                <PTab label="Tab 1">
                    <p>Tab 1 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                </PTab>
                <PTab label="Tab 2">
                    <p>Tab 2 = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                </PTab>
                <PTab label="Tab 3" disabled>
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

export default DisabledTabsSection;
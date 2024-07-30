"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag, PRadio} from "@/app/components/src";

function DisabledRadioSection() {
    const codeBlock = `<PRadio disabled={true} />
//or
<PRadio disabled />
`;
    return (
        <PComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>We can manage this state by sending the standard <PTag label={"disabled"}/> property.</>}
            codeBlock={codeBlock}
        >
            <PRadio
                disabled
                label="Disabled"
                name="disabled"
                checked={false}
                onChange={() => null}
            />
        </PComponentShowcaseArea>
    );
}
export default DisabledRadioSection;
"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiRadio from "@/app/components/src/BuiRadio";
import {BuiCode} from "@/app/components";

function DisabledRadioSection() {
    const codeBlock = `<BuiRadio disabled={true} />
//or
<BuiRadio disabled />
`;
    return (
        <BuiComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>We can manage this state by sending the standard <BuiCode>disabled</BuiCode> property.</>}
            codeBlock={codeBlock}
        >
            <BuiRadio
                disabled
                label="Disabled"
                name="disabled"
                checked={false}
                onChange={() => null}
            />
        </BuiComponentShowcaseArea>
    );
}
export default DisabledRadioSection;
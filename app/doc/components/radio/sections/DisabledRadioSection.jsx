"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTag, BuiRadio} from "@/app/components/src";

function DisabledRadioSection() {
    const codeBlock = `<BuiRadio disabled={true} />
//or
<BuiRadio disabled />
`;
    return (
        <BuiComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>We can manage this state by sending the standard <BuiTag label={"disabled"}/> property.</>}
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
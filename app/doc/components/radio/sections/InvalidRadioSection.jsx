"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiRadio from "@/app/components/src/BuiRadio";
import {BuiCode} from "@/app/components";

function InvalidRadioSection() {
    const codeBlock = `<BuiRadio isInvalid={true}/>
//or
<BuiRadio isInvalid/>
`;
    return (
        <BuiComponentShowcaseArea
            anchor="invalid"
            title="Invalid"
            desc={<>We can manage this state by sending the standard <BuiCode>isInvalid</BuiCode> property.</>}
            codeBlock={codeBlock}
        >
            <BuiRadio
                isInvalid={true}
                label="Invalid"
                name="invalid"
                checked={false}
                onChange={() => null}
            />
        </BuiComponentShowcaseArea>
    );
}
export default InvalidRadioSection;
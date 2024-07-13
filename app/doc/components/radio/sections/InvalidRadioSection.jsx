"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiCode, BuiRadio} from "@/app/components/src";

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
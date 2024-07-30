"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag, PRadio} from "@/app/components/src";

function InvalidRadioSection() {
    const codeBlock = `<PRadio isInvalid={true}/>
//or
<PRadio isInvalid/>
`;
    return (
        <PComponentShowcaseArea
            anchor="invalid"
            title="Invalid"
            desc={<>We can manage this state by sending the standard <PTag label={"isInvalid"}/> property.</>}
            codeBlock={codeBlock}
        >
            <PRadio
                isInvalid={true}
                label="Invalid"
                name="invalid"
                checked={false}
                onChange={() => null}
            />
        </PComponentShowcaseArea>
    );
}
export default InvalidRadioSection;
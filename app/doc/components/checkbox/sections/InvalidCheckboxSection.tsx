"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag, PCheckbox} from "@/app/components/src";
import {useState} from "react";

function InvalidCheckboxSection() {
    const [checked,setChecked] = useState(false);
    const codeBlock = `<PCheckbox invalid={true} />`;
    return (
        <PComponentShowcaseArea
            anchor="invalid"
            title="Invalid"
            desc={<>You can manage this process by sending a <PTag label={"boolean"}/> value to the <PTag label={"invalid"}/> prop of the checkbox component using form validation libraries.</>}
            codeBlock={codeBlock}
        >
            <PCheckbox label="Checkbox 1" invalid={true} checked={checked} onChange={() => setChecked(!checked)} />
        </PComponentShowcaseArea>
    );
}
export default InvalidCheckboxSection;
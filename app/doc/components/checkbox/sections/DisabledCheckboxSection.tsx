"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag, PCheckbox} from "@/app/components/src";
import {useState} from "react";

function DisabledCheckboxSection() {
    const [checked,setChecked] = useState(true);
    const codeBlock = `<PCheckbox disabled />`;
    return (
        <PComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>You can manage this process by sending a <PTag label="boolean"/> value to the <PTag label="disabled"/> prop of the checkbox component.</>}
            codeBlock={codeBlock}
        >
            <PCheckbox disabled label="Checkbox 1" checked={checked} onChange={() => setChecked(!checked)} />
        </PComponentShowcaseArea>
    );
}
export default DisabledCheckboxSection;
"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag, PCheckbox} from "@/app/components/src";
import {useState} from "react";

function LabelCheckboxSection() {
    const [checked,setChecked] = useState(true);
    const [checked2,setChecked2] = useState(true);
    const [checked3,setChecked3] = useState(true);
    const codeBlock = `<PCheckbox label="Checkbox 1" />`;
    return (
        <PComponentShowcaseArea
            anchor="label"
            title="Label"
            desc={<>You can add it to the text by sending the <PTag label="label"/> prop.</>}
            codeBlock={codeBlock}
        >
            <PCheckbox label="Checkbox 1" checked={checked} onChange={() => setChecked(!checked)} />
            <PCheckbox label="Checkbox 2" color="red" checked={checked2} onChange={() => setChecked2(!checked2)} />
            <PCheckbox label="Checkbox 3" color="orange" checked={checked3} onChange={() => setChecked3(!checked3)} />
        </PComponentShowcaseArea>
    );
}
export default LabelCheckboxSection;
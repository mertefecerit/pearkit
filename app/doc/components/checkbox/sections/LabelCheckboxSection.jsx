"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiCode from "@/app/components/src/BuiCode";
import BuiCheckbox from "@/app/components/src/BuiCheckbox";
import {useState} from "react";

function LabelCheckboxSection() {
    const [checked,setChecked] = useState(true);
    const [checked2,setChecked2] = useState(true);
    const [checked3,setChecked3] = useState(true);
    const codeBlock = `<BuiCheckbox label="Checkbox 1" />`;
    return (
        <BuiComponentShowcaseArea
            anchor="label"
            title="Label"
            desc={<>You can add it to the text by sending the <BuiCode>label</BuiCode> prop.</>}
            codeBlock={codeBlock}
        >
            <BuiCheckbox label="Checkbox 1" checked={checked} onChange={() => setChecked(!checked)} />
            <BuiCheckbox label="Checkbox 2" color="red" checked={checked2} onChange={() => setChecked2(!checked2)} />
            <BuiCheckbox label="Checkbox 3" color="orange" checked={checked3} onChange={() => setChecked3(!checked3)} />
        </BuiComponentShowcaseArea>
    );
}
export default LabelCheckboxSection;
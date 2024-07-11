"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiCode from "@/app/components/src/BuiCode";
import BuiCheckbox from "@/app/components/src/BuiCheckbox";
import {useState} from "react";

function BasicCheckboxSection() {
    const [checked,setChecked] = useState(true);
    const codeBlock = `const [checked, setChecked] = useState(true);

<BuiCheckbox checked={checked} onChange={() => setChecked(!checked)} />`;
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Checkbox is used as a controlled input with <BuiCode>checked</BuiCode> and <BuiCode>onChange</BuiCode> properties.</>}
            codeBlock={codeBlock}
        >
            <BuiCheckbox checked={checked} onChange={() => setChecked(!checked)} />
        </BuiComponentShowcaseArea>
    );
}
export default BasicCheckboxSection;
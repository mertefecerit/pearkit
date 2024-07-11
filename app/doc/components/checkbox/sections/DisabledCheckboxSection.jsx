"use client"
import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiCode from "@/app/components/BuiCode";
import BuiCheckbox from "@/app/components/BuiCheckbox";
import {useState} from "react";

function DisabledCheckboxSection() {
    const [checked,setChecked] = useState(true);
    const codeBlock = `<BuiCheckbox disabled={true} />`;
    return (
        <BuiComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>You can manage this process by sending a <BuiCode>boolean</BuiCode> value to the <BuiCode>disabled</BuiCode> prop of the checkbox component.</>}
            codeBlock={codeBlock}
        >
            <BuiCheckbox disabled={true} label="Checkbox 1" checked={checked} onChange={() => setChecked(!checked)} />
        </BuiComponentShowcaseArea>
    );
}
export default DisabledCheckboxSection;
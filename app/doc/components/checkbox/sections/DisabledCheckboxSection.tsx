"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTag, BuiCheckbox} from "@/app/components/src";
import {useState} from "react";

function DisabledCheckboxSection() {
    const [checked,setChecked] = useState(true);
    const codeBlock = `<BuiCheckbox disabled />`;
    return (
        <BuiComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>You can manage this process by sending a <BuiTag label="boolean"/> value to the <BuiTag label="disabled"/> prop of the checkbox component.</>}
            codeBlock={codeBlock}
        >
            <BuiCheckbox disabled label="Checkbox 1" checked={checked} onChange={() => setChecked(!checked)} />
        </BuiComponentShowcaseArea>
    );
}
export default DisabledCheckboxSection;
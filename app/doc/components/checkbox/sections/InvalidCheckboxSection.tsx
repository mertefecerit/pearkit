"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTag, BuiCheckbox} from "@/app/components/src";
import {useState} from "react";

function InvalidCheckboxSection() {
    const [checked,setChecked] = useState(false);
    const codeBlock = `<BuiCheckbox invalid={true} />`;
    return (
        <BuiComponentShowcaseArea
            anchor="invalid"
            title="Invalid"
            desc={<>You can manage this process by sending a <BuiTag label={"boolean"}/> value to the <BuiTag label={"invalid"}/> prop of the checkbox component using form validation libraries.</>}
            codeBlock={codeBlock}
        >
            <BuiCheckbox label="Checkbox 1" invalid={true} checked={checked} onChange={() => setChecked(!checked)} />
        </BuiComponentShowcaseArea>
    );
}
export default InvalidCheckboxSection;
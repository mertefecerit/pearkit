"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiTag from "@/app/components/src/BuiTag";
import BuiCheckbox from "@/app/components/src/BuiCheckbox";
import {useState} from "react";

function InvalidCheckboxSection() {
    const [checked,setChecked] = useState(false);
    const codeBlock = `<BuiCheckbox invalid={true} />`;
    return (
        <BuiComponentShowcaseArea
            anchor="invalid"
            title="Invalid"
            desc={<>You can manage this process by sending a <BuiTag>boolean</BuiTag> value to the <BuiTag>invalid</BuiTag> prop of the checkbox component using form validation libraries.</>}
            codeBlock={codeBlock}
        >
            <BuiCheckbox label="Checkbox 1" invalid={true} checked={checked} onChange={() => setChecked(!checked)} />
        </BuiComponentShowcaseArea>
    );
}
export default InvalidCheckboxSection;
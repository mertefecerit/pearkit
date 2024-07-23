"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiTag from "@/app/components/src/BuiTag";
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
            desc={<>Checkbox is used as a controlled input with <BuiTag label="checked"/> and <BuiTag label="onChange"/> properties.</>}
            codeBlock={codeBlock}
        >
            <BuiCheckbox checked={checked} onChange={() => setChecked(!checked)} />
        </BuiComponentShowcaseArea>
    );
}
export default BasicCheckboxSection;
"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag, PCheckbox} from "@/app/components/src";
import {useState} from "react";

function BasicCheckboxSection() {
    const [checked,setChecked] = useState(true);
    const codeBlock = `const [checked, setChecked] = useState(true);

<PCheckbox checked={checked} onChange={() => setChecked(!checked)} />`;
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Checkbox is used as a controlled input with <PTag label="checked"/> and <PTag label="onChange"/> properties.</>}
            codeBlock={codeBlock}
        >
            <PCheckbox checked={checked} onChange={() => setChecked(!checked)} />
        </PComponentShowcaseArea>
    );
}
export default BasicCheckboxSection;
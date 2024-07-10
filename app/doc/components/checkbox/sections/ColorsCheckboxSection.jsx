"use client"
import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiCode from "@/app/components/BuiCode";
import BuiCheckbox from "@/app/components/BuiCheckbox";
import {useState} from "react";

function ColorsCheckboxSection() {
    const codeBlock = `<BuiCheckbox />
<BuiCheckbox color="red" />
<BuiCheckbox color="orange" />
<BuiCheckbox color="indigo" />
<BuiCheckbox color="green" />`;
    return (
        <BuiComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <BuiCode>sky</BuiCode> <BuiCode>red</BuiCode> <BuiCode>indigo</BuiCode></>}
            codeBlock={codeBlock}
        >
            <BuiCheckbox checked />
            <BuiCheckbox color="red" checked />
            <BuiCheckbox color="orange" checked />
            <BuiCheckbox color="indigo" checked />
            <BuiCheckbox color="green" checked />
        </BuiComponentShowcaseArea>
    );
}
export default ColorsCheckboxSection;
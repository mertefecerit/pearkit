"use client"
import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiCode from "@/app/components/BuiCode";
import BuiCheckbox from "@/app/components/BuiCheckbox";
import {useState} from "react";

function AccessibilityCheckboxSection() {
    return (
        <BuiComponentShowcaseArea
            anchor="accessibility"
            title="Accessibility (Beta)"
            desc={<>Aria-checked and aria-label are provided for the screen reader. It can be changed by giving it as <BuiCode>aria-label</BuiCode> prop. If not given, the <BuiCode>label</BuiCode> prop is placed instead. You should use <BuiCode>aria-label</BuiCode> for options where you do not give a label.</>}
            codeBlock={`<BuiCheckbox aria-label="Checbox 1"/>`}
        />
    );
}
export default AccessibilityCheckboxSection;
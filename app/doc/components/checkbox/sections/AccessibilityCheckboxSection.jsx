"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiTag from "@/app/components/src/BuiTag";

function AccessibilityCheckboxSection() {
    return (
        <BuiComponentShowcaseArea
            anchor="accessibility"
            title="Accessibility (Beta)"
            desc={<>Aria-checked and aria-label are provided for the screen reader. It can be changed by giving it as <BuiTag>aria-label</BuiTag> prop. If not given, the <BuiTag>label</BuiTag> prop is placed instead. You should use <BuiTag>aria-label</BuiTag> for options where you do not give a label.</>}
            codeBlock={`<BuiCheckbox aria-label="Checbox 1"/>`}
        />
    );
}
export default AccessibilityCheckboxSection;
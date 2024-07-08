"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import {Icon} from "@iconify/react";
import BuiCode from "@/app/components/BuiCode";

function AccessibilityButtonSection(props) {
    const codeBlock = `<BuiButton ariaLabel="Submit Button">Submit</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            anchor="accessibility"
            title="Accessibility"
            desc={<>The Button component creates a native button element that implicitly contains any passed properties. The text that describes the button is defined by the <BuiCode>aria-label</BuiCode> prop. If the button is icon-only or a custom template is used, using <BuiCode>aria-label</BuiCode> is recommended so screen readers can read the element properly.</>}
            codeBlock={codeBlock}
        >
        </BuiComponentShowcaseArea>
    )
}

export default AccessibilityButtonSection;
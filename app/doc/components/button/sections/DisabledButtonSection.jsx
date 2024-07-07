"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import BuiCode from "@/app/components/BuiCode";

function DisabledButtonSection(props) {
    const codeBlock = `<BuiButton disabled>Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>You can give a bool value to disable the button.</>}
            codeBlock={codeBlock}
        >
            <BuiButton disabled>Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default DisabledButtonSection;
"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import BuiCode from "@/app/components/BuiCode";

function BasicButtonSection(props) {
    const codeBlock = `<BuiButton>Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>The text or content to be displayed on the button can be defined by writing it directly into it.</>}
            codeBlock={codeBlock}
        >
            <BuiButton>Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default BasicButtonSection;
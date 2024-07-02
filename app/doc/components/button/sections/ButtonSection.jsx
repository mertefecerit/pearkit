"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import BuiCode from "@/app/components/BuiCode";

function ButtonSection(props) {
    const buttonCodeBlock = `<BuiButton variant="text">Text Button</BuiButton>
<BuiButton>Basic Button</BuiButton>
<BuiButton variant="outlined">Outlined Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            title="Button"
            desc={<>The <BuiCode>Button</BuiCode> comes with
                three variants: text (default), basic, and outlined.</>}
            codeBlock={buttonCodeBlock}
        >
            <BuiButton variant="text">Text Button</BuiButton>
            <BuiButton>Basic Button</BuiButton>
            <BuiButton variant="outlined">Outlined Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default ButtonSection;
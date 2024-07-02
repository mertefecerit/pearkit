"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";

function ButtonSection(props) {
    const buttonCodeBlock = `<BuiButton variant="text">Text Button</BuiButton>
<BuiButton>Basic Button</BuiButton>
<BuiButton variant="outlined">Outlined Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            title="Button"
            desc={<>The <code className="bg-gray-100 px-1 py-0.5 text-sm rounded border">Button</code> comes with
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
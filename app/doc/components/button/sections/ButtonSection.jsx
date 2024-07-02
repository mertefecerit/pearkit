"use client"
import BComponentShowcaseArea from "@/app/components/BComponentShowcaseArea";
import BButton from "@/app/components/BButton";

function ButtonSection(props) {
    const buttonCodeBlock = `<BButton variant="text">Text Button</BButton>
<BButton>Basic Button</BButton>
<BButton variant="outlined">Outlined Button</BButton>`;

    return (
        <BComponentShowcaseArea
            title="Button"
            desc={<>The <code className="bg-gray-100 px-1 py-0.5 text-sm rounded border">Button</code> comes with
                three variants: text (default), basic, and outlined.</>}
            codeBlock={buttonCodeBlock}
        >
            <BButton variant="text">Text Button</BButton>
            <BButton>Basic Button</BButton>
            <BButton variant="outlined">Outlined Button</BButton>
        </BComponentShowcaseArea>
    )
}

export default ButtonSection;
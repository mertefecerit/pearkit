"use client"
import BComponentShowcaseArea from "@/app/components/BComponentShowcaseArea";
import BButton from "@/app/components/BButton";

function ButtonSection(props) {
    const codeBlock = `<BButton variant="text" color="red">Text Button</BButton>
<BButton color="red">Basic Button</BButton>
<BButton variant="outlined" color="red">Outlined Button</BButton>`;

    return (
        <BComponentShowcaseArea
            title="Colors"
            desc={<>Simply send the color names in the standard tailwindcss color palette as props. Like indigo, red, sky etc. Default color is tailwind blue.</>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                    <BButton variant="text" color="red">Text Button</BButton>
                    <BButton color="red">Basic Button</BButton>
                    <BButton variant="outlined" color="red">Outlined Button</BButton>
                </div>
                <div className="flex flex-wrap gap-4">
                    <BButton variant="text" color="yellow">Text Button</BButton>
                    <BButton color="yellow">Basic Button</BButton>
                    <BButton variant="outlined" color="yellow">Outlined Button</BButton>
                </div>
                <div className="flex flex-wrap gap-4">
                    <BButton variant="text" color="green">Text Button</BButton>
                    <BButton color="green">Basic Button</BButton>
                    <BButton variant="outlined" color="green">Outlined Button</BButton>
                </div>
            </div>
        </BComponentShowcaseArea>
    )
}

export default ButtonSection;
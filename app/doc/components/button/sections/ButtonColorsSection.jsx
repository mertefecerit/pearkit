"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import BuiCode from "@/app/components/BuiCode";

function ButtonColorsSection(props) {
    const codeBlock = `<BuiButton color="red">Basic Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            title="Colors"
            desc={<>Simply send the <BuiCode>color</BuiCode> names in the standard tailwindcss color palette as props. Like indigo, red, sky etc. Default color is tailwind blue.</>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                    <BuiButton variant="text" color="indigo">Text Button</BuiButton>
                    <BuiButton color="indigo">Basic Button</BuiButton>
                    <BuiButton variant="outlined" color="indigo">Outlined Button</BuiButton>
                </div>
                <div className="flex flex-wrap gap-4">
                    <BuiButton variant="text" color="yellow">Text Button</BuiButton>
                    <BuiButton color="yellow">Basic Button</BuiButton>
                    <BuiButton variant="outlined" color="yellow">Outlined Button</BuiButton>
                </div>
                <div className="flex flex-wrap gap-4">
                    <BuiButton variant="text" color="red">Text Button</BuiButton>
                    <BuiButton color="red">Basic Button</BuiButton>
                    <BuiButton variant="outlined" color="red">Outlined Button</BuiButton>
                </div>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default ButtonColorsSection;
"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";

function ButtonColorsSection(props) {
    const codeBlock = `<BuiButton variant="text" color="red">Text Button</BuiButton>
<BuiButton color="red">Basic Button</BuiButton>
<BuiButton variant="outlined" color="red">Outlined Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            title="Colors"
            desc={<>Simply send the color names in the standard tailwindcss color palette as props. Like indigo, red, sky etc. Default color is tailwind blue.</>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                    <BuiButton variant="text" color="red">Text Button</BuiButton>
                    <BuiButton color="red">Basic Button</BuiButton>
                    <BuiButton variant="outlined" color="red">Outlined Button</BuiButton>
                </div>
                <div className="flex flex-wrap gap-4">
                    <BuiButton variant="text" color="yellow">Text Button</BuiButton>
                    <BuiButton color="yellow">Basic Button</BuiButton>
                    <BuiButton variant="outlined" color="yellow">Outlined Button</BuiButton>
                </div>
                <div className="flex flex-wrap gap-4">
                    <BuiButton variant="text" color="green">Text Button</BuiButton>
                    <BuiButton color="green">Basic Button</BuiButton>
                    <BuiButton variant="outlined" color="green">Outlined Button</BuiButton>
                </div>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default ButtonColorsSection;
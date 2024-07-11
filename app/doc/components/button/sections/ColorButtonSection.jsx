import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import BuiCode from "@/app/components/BuiCode";
import {Icon} from "@iconify/react";

function ColorButtonSection(props) {
    const codeBlock =
`<BuiButton color="indigo">Submit</BuiButton>
<BuiButton color="yellow">Submit</BuiButton>
<BuiButton color="sky">Submit</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            anchor="color"
            title="Color"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. <BuiCode>sky</BuiCode> <BuiCode>red</BuiCode> <BuiCode>indigo</BuiCode></>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4 items-center">
                    <BuiButton color="indigo" startIcon={<Icon icon="mdi:check"/>}></BuiButton>
                    <BuiButton color="yellow">Button</BuiButton>
                    <BuiButton color="sky">Button</BuiButton>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <BuiButton color="indigo" startIcon={<Icon icon="mdi:check"/>} variant="outlined"></BuiButton>
                    <BuiButton color="yellow" variant="outlined">Button</BuiButton>
                    <BuiButton color="sky" variant="outlined">Button</BuiButton>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <BuiButton color="indigo" startIcon={<Icon icon="mdi:check"/>} variant="text"></BuiButton>
                    <BuiButton color="yellow" variant="text">Button</BuiButton>
                    <BuiButton color="sky" variant="text">Button</BuiButton>
                </div>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default ColorButtonSection;
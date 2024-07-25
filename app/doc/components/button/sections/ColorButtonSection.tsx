import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButton, BuiTag} from "@/app/components/src";
import {Icon} from "@iconify/react";

function ColorButtonSection() {
    const codeBlock =
`<BuiButton color="indigo" label="Button"/>
<BuiButton color="yellow" label="Button"/>
<BuiButton color="sky" label="Button"/>`;

    return (
        <BuiComponentShowcaseArea
            anchor="color"
            title="Color"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. <BuiTag label="sky"/> <BuiTag label="red"/> <BuiTag label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4 items-center">
                    <BuiButton color="indigo" startIcon={<Icon icon="mdi:check"/>}/>
                    <BuiButton color="yellow" label={"Button"}/>
                    <BuiButton color="sky" label={"Button"}/>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <BuiButton color="indigo" startIcon={<Icon icon="mdi:check"/>} variant="outlined"/>
                    <BuiButton color="yellow" variant="outlined" label={"Button"}/>
                    <BuiButton color="sky" variant="outlined" label={"Button"}/>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <BuiButton color="indigo" startIcon={<Icon icon="mdi:check"/>} variant="text"/>
                    <BuiButton color="yellow" variant="text" label={"Button"}/>
                    <BuiButton color="sky" variant="text" label={"Button"}/>
                </div>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default ColorButtonSection;
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton, PTag} from "@/app/components/src";
import {Icon} from "@iconify/react";

function ColorButtonSection() {
    const codeBlock =
`<PButton color="indigo" label="Button"/>
<PButton color="yellow" label="Button"/>
<PButton color="sky" label="Button"/>`;

    return (
        <PComponentShowcaseArea
            anchor="color"
            title="Color"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. <PTag label="sky"/> <PTag label="red"/> <PTag label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4 items-center">
                    <PButton color="indigo" startIcon={<Icon icon="mdi:check"/>}/>
                    <PButton color="yellow" label={"Button"}/>
                    <PButton color="sky" label={"Button"}/>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <PButton color="indigo" startIcon={<Icon icon="mdi:check"/>} variant="outlined"/>
                    <PButton color="yellow" variant="outlined" label={"Button"}/>
                    <PButton color="sky" variant="outlined" label={"Button"}/>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <PButton color="indigo" startIcon={<Icon icon="mdi:check"/>} variant="text"/>
                    <PButton color="yellow" variant="text" label={"Button"}/>
                    <PButton color="sky" variant="text" label={"Button"}/>
                </div>
            </div>
        </PComponentShowcaseArea>
    )
}

export default ColorButtonSection;
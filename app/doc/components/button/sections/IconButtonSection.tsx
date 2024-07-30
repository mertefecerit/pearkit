import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton, PTag} from "@/app/components/src";
import {Icon} from "@iconify/react";

function IconButtonSection() {
    const codeBlock = `<PButton startIcon={<Icon icon="mdi:check"/>}/>
<PButton startIcon={<Icon icon="mdi:check"/>}/>
<PButton endIcon={<Icon icon="mdi:check"/>}/>
`;

    return (
        <PComponentShowcaseArea
            anchor="icon"
            title="Icon"
            desc={<>For more flexible use, you can send your icons as components.You can put icons at the beginning and
                end of the button content. For this you use
                the <PTag label="startIcon"/> and <PTag label="endIcon" /> props. If you do not submit content,
                only your icon will appear.</>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                    <PButton startIcon={<Icon icon="mdi:check"/>}></PButton>
                    <PButton startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
                    <PButton endIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <PButton variant="outlined" startIcon={<Icon icon="mdi:check"/>}></PButton>
                    <PButton variant="outlined" startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
                    <PButton variant="outlined" endIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <PButton variant="text" startIcon={<Icon icon="mdi:check"/>}></PButton>
                    <PButton variant="text" startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
                    <PButton variant="text" endIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
                </div>
            </div>
        </PComponentShowcaseArea>
    )
}

export default IconButtonSection;
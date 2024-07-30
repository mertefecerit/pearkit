import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton, PTag} from "@/app/components/src";
import {Icon} from "@iconify/react";

function SizesButtonSection() {
    const codeBlock = `<PButton size="lg" label="Button"/>`;

    return (
        <PComponentShowcaseArea
            anchor="sizes"
            title="Sizes"
            desc={<>5 types of size units are used. The <PTag label="base"/> one is assigned by default. The other four are <PTag label="xs"/>, <PTag label="sm"/>, <PTag label="lg"/> and <PTag label="xl"/>.</>}
            codeBlock={codeBlock}
        >
            <PButton size="xs" startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
            <PButton size="sm" startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
            <PButton startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
            <PButton size="lg" startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
            <PButton size="xl" startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
        </PComponentShowcaseArea>
    )
}

export default SizesButtonSection;
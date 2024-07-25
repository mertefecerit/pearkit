import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButton, BuiTag} from "@/app/components/src";
import {Icon} from "@iconify/react";

function SizesButtonSection() {
    const codeBlock = `<BuiButton size="lg" label="Button"/>`;

    return (
        <BuiComponentShowcaseArea
            anchor="sizes"
            title="Sizes"
            desc={<>5 types of size units are used. The <BuiTag label="base"/> one is assigned by default. The other four are <BuiTag label="xs"/>, <BuiTag label="sm"/>, <BuiTag label="lg"/> and <BuiTag label="xl"/>.</>}
            codeBlock={codeBlock}
        >
            <BuiButton size="xs" startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
            <BuiButton size="sm" startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
            <BuiButton startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
            <BuiButton size="lg" startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
            <BuiButton size="xl" startIcon={<Icon icon="mdi:check"/>} label={"Button"}/>
        </BuiComponentShowcaseArea>
    )
}

export default SizesButtonSection;
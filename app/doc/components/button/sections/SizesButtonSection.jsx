import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/src/BuiButton";
import {Icon} from "@iconify/react";
import BuiTag from "@/app/components/src/BuiTag";

function SizesButtonSection(props) {
    const codeBlock = `<BuiButton size="xs" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
<BuiButton size="sm" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
<BuiButton startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
<BuiButton size="lg" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
<BuiButton size="xl" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            anchor="sizes"
            title="Sizes"
            desc={<>5 types of size units are used. The <BuiTag>base</BuiTag> one is assigned by default. The other four are <BuiTag>xs</BuiTag>, <BuiTag>sm</BuiTag>, <BuiTag>lg</BuiTag> and <BuiTag>xl</BuiTag>.</>}
            codeBlock={codeBlock}
        >
            <BuiButton size="xs" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
            <BuiButton size="sm" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
            <BuiButton startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
            <BuiButton size="lg" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
            <BuiButton size="xl" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default SizesButtonSection;
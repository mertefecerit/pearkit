import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import {Icon} from "@iconify/react";
import BuiCode from "@/app/components/BuiCode";

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
            desc={<>5 types of size units are used. The <BuiCode>base</BuiCode> one is assigned by default. The other four are <BuiCode>xs</BuiCode>, <BuiCode>sm</BuiCode>, <BuiCode>lg</BuiCode> and <BuiCode>xl</BuiCode>.</>}
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
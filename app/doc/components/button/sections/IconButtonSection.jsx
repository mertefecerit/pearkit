import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/src/BuiButton";
import BuiTag from "@/app/components/src/BuiTag";
import {Icon} from "@iconify/react";

function IconButtonSection(props) {
    const codeBlock = `<BuiButton startIcon={<Icon icon="mdi:check"/>}></BuiButton>
<BuiButton startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
<BuiButton endIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>

<BuiButton variant="outlined" startIcon={<Icon icon="mdi:check"/>}></BuiButton>
<BuiButton variant="outlined" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
<BuiButton variant="outlined" endIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>

<BuiButton variant="text" startIcon={<Icon icon="mdi:check"/>}></BuiButton>
<BuiButton variant="text" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
<BuiButton variant="text" endIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
`;

    return (
        <BuiComponentShowcaseArea
            anchor="icon"
            title="Icon"
            desc={<>For more flexible use, you can send your icons as components.You can put icons at the beginning and
                end of the button content. For this you use
                the <BuiTag label="startIcon"/> and <BuiTag label="endIcon" /> props. If you do not submit content,
                only your icon will appear.</>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                    <BuiButton startIcon={<Icon icon="mdi:check"/>}></BuiButton>
                    <BuiButton startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
                    <BuiButton endIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <BuiButton variant="outlined" startIcon={<Icon icon="mdi:check"/>}></BuiButton>
                    <BuiButton variant="outlined" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
                    <BuiButton variant="outlined" endIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <BuiButton variant="text" startIcon={<Icon icon="mdi:check"/>}></BuiButton>
                    <BuiButton variant="text" startIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
                    <BuiButton variant="text" endIcon={<Icon icon="mdi:check"/>}>Button</BuiButton>
                </div>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default IconButtonSection;
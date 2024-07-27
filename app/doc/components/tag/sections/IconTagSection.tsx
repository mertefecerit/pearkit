import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTag} from "@/app/components/src";
import {Icon} from "@iconify/react";

function IconTagSection() {
    const codeBlock = `<BuiTag icon={<Icon icon="mdi:check"/>} />`
    return (
        <BuiComponentShowcaseArea
            anchor="icon"
            title="Icon"
            desc={<>You can add a tag icon by passing an icon component to the <BuiTag label="icon"/> property.</>}
            codeBlock={codeBlock}
        >
            <BuiTag label="New" icon={<Icon icon="mdi:check"/>} />
        </BuiComponentShowcaseArea>
    );
}

export default IconTagSection;
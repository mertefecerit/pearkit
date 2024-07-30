import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag} from "@/app/components/src";
import {Icon} from "@iconify/react";

function IconTagSection() {
    const codeBlock = `<PTag icon={<Icon icon="mdi:check"/>} />`
    return (
        <PComponentShowcaseArea
            anchor="icon"
            title="Icon"
            desc={<>You can add a tag icon by passing an icon component to the <PTag label="icon"/> property.</>}
            codeBlock={codeBlock}
        >
            <PTag label="New" icon={<Icon icon="mdi:check"/>} />
        </PComponentShowcaseArea>
    );
}

export default IconTagSection;
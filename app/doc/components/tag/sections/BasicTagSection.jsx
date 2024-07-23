import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTag} from "@/app/components/src";

function BasicTagSection() {
    const codeBlock = `<BuiTag label="New" />`
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Label of the tag is defined with the <BuiTag label="label"/> property.</>}
            codeBlock={codeBlock}
        >
            <BuiTag label="New" />
        </BuiComponentShowcaseArea>
    );
}

export default BasicTagSection;
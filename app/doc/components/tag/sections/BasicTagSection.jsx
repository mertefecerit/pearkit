import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTag} from "@/app/components/src";

function BasicTagSection() {
    const codeBlock = `<BuiTag>Code</BuiTag>`
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<></>}
            codeBlock={codeBlock}
        >
            <BuiTag>Code</BuiTag>
        </BuiComponentShowcaseArea>
    );
}

export default BasicTagSection;
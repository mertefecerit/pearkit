import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag} from "@/app/components/src";

function BasicTagSection() {
    const codeBlock = `<PTag label="New" />`
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Label of the tag is defined with the <PTag label="label"/> property.</>}
            codeBlock={codeBlock}
        >
            <PTag label="New" />
        </PComponentShowcaseArea>
    );
}

export default BasicTagSection;
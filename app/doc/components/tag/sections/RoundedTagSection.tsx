import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag} from "@/app/components/src";

function RoundedTagSection() {
    const codeBlock = `<PTag rounded />`
    return (
        <PComponentShowcaseArea
            anchor="rounded"
            title="Rounded"
            desc={<>Enabling rounded, displays a tag as a fully rounded</>}
            codeBlock={codeBlock}
        >
            <PTag label="New" rounded />
        </PComponentShowcaseArea>
    );
}

export default RoundedTagSection;
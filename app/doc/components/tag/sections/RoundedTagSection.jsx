import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTag} from "@/app/components/src";

function RoundedTagSection() {
    const codeBlock = `<BuiTag rounded />`
    return (
        <BuiComponentShowcaseArea
            anchor="rounded"
            title="Rounded"
            desc={<>Enabling rounded, displays a tag as a fully rounded</>}
            codeBlock={codeBlock}
        >
            <BuiTag label="New" rounded />
        </BuiComponentShowcaseArea>
    );
}

export default RoundedTagSection;
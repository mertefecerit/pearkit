import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton, PTag} from "@/app/components/src";

function VariantButtonSection() {
    const codeBlock = `<PButton label="Button"/>
<PButton variant="outlined" label="Button"/>
<PButton variant="text" label="Button"/>
`;

    return (
        <PComponentShowcaseArea
            anchor="variants"
            title="Variants"
            desc={<>There are 3 types of variants for buttons. <PTag label="text"/>, <PTag label="outlined"/> and <PTag label="basic"/>, <PTag label="basic"></PTag> is selected by default.</>}
            codeBlock={codeBlock}
        >
            <PButton label="Button"/>
            <PButton variant="outlined" label="Button"/>
            <PButton variant="text" label="Button"/>
        </PComponentShowcaseArea>
    )
}

export default VariantButtonSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButton, BuiTag} from "@/app/components/src";

function VariantButtonSection(props) {
    const codeBlock = `<BuiButton label="Button"/>
<BuiButton variant="outlined" label="Button"/>
<BuiButton variant="text" label="Button"/>
`;

    return (
        <BuiComponentShowcaseArea
            anchor="variants"
            title="Variants"
            desc={<>There are 3 types of variants for buttons. <BuiTag label="text"/>, <BuiTag label="outlined"/> and <BuiTag label="basic"/>, <BuiTag label="basic"></BuiTag> is selected by default.</>}
            codeBlock={codeBlock}
        >
            <BuiButton label="Button"/>
            <BuiButton variant="outlined" label="Button"/>
            <BuiButton variant="text" label="Button"/>
        </BuiComponentShowcaseArea>
    )
}

export default VariantButtonSection;
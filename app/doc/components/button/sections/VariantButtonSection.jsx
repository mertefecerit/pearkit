"use client"
import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import BuiCode from "@/app/components/BuiCode";

function VariantButtonSection(props) {
    const codeBlock = `<BuiButton>Button</BuiButton>
<BuiButton variant="outlined">Button</BuiButton>
<BuiButton variant="text">Button</BuiButton>
`;

    return (
        <BuiComponentShowcaseArea
            anchor="variants"
            title="Variants"
            desc={<>There are 3 types of variants for buttons. <BuiCode>text</BuiCode>, <BuiCode>outlined</BuiCode> and <BuiCode>basic</BuiCode>, <BuiCode>basic</BuiCode> is selected by default.</>}
            codeBlock={codeBlock}
        >
            <BuiButton>Button</BuiButton>
            <BuiButton variant="outlined">Button</BuiButton>
            <BuiButton variant="text">Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default VariantButtonSection;
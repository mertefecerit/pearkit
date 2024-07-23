import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/src/BuiButton";
import BuiTag from "@/app/components/src/BuiTag";

function VariantButtonSection(props) {
    const codeBlock = `<BuiButton>Button</BuiButton>
<BuiButton variant="outlined">Button</BuiButton>
<BuiButton variant="text">Button</BuiButton>
`;

    return (
        <BuiComponentShowcaseArea
            anchor="variants"
            title="Variants"
            desc={<>There are 3 types of variants for buttons. <BuiTag>text</BuiTag>, <BuiTag>outlined</BuiTag> and <BuiTag>basic</BuiTag>, <BuiTag>basic</BuiTag> is selected by default.</>}
            codeBlock={codeBlock}
        >
            <BuiButton>Button</BuiButton>
            <BuiButton variant="outlined">Button</BuiButton>
            <BuiButton variant="text">Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default VariantButtonSection;
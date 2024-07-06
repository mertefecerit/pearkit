"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiCode from "@/app/components/BuiCode";
import BuiButtonGroup from "@/app/components/BuiButtonGroup";
import BuiButton from "@/app/components/BuiButton";

function ButtonGroupVariantSection(){
    const codeBlock =
`<BuiButtonGroup>
    <BuiButton variant="outlined">One</BuiButton>
    <BuiButton variant="outlined">Two</BuiButton>
    <BuiButton variant="outlined">Three</BuiButton>
</BuiButtonGroup>
<BuiButtonGroup>
    <BuiButton variant="text">One</BuiButton>
    <BuiButton variant="text">Two</BuiButton>
    <BuiButton variant="text">Three</BuiButton>
</BuiButtonGroup>`;
    return (
        <BuiComponentShowcaseArea
            anchor="button-variants"
            title="Button Variants"
            desc={<>All the standard button variants are supported.</>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <BuiButtonGroup>
                    <BuiButton variant="outlined">One</BuiButton>
                    <BuiButton variant="outlined">Two</BuiButton>
                    <BuiButton variant="outlined">Three</BuiButton>
                </BuiButtonGroup>
                <BuiButtonGroup>
                    <BuiButton variant="text">One</BuiButton>
                    <BuiButton variant="text">Two</BuiButton>
                    <BuiButton variant="text">Three</BuiButton>
                </BuiButtonGroup>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default ButtonGroupVariantSection;
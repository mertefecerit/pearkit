"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiCode from "@/app/components/BuiCode";
import BuiButtonGroup from "@/app/components/BuiButtonGroup";
import BuiButton from "@/app/components/BuiButton";

function BasicButtonGroupSection(){
    const codeBlock =
`<BuiButtonGroup>
    <BuiButton>One</BuiButton>
    <BuiButton>Two</BuiButton>
    <BuiButton>Three</BuiButton>
</BuiButtonGroup>`;
    return (
        <BuiComponentShowcaseArea
            title="Basic Button Group"
            desc={<>The buttons can be grouped by wrapping them with the <BuiCode>BuiButtonGroup</BuiCode> component. They need to be immediate children.</>}
            codeBlock={codeBlock}
        >
            <BuiButtonGroup>
                <BuiButton>One</BuiButton>
                <BuiButton>Two</BuiButton>
                <BuiButton>Three</BuiButton>
            </BuiButtonGroup>
        </BuiComponentShowcaseArea>
    )
}

export default BasicButtonGroupSection;
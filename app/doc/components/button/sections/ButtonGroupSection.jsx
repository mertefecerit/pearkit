import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiCode from "@/app/components/BuiCode";
import BuiButtonGroup from "@/app/components/BuiButtonGroup";
import BuiButton from "@/app/components/BuiButton";

function ButtonGroupSection(){
    const codeBlock =
`<BuiButtonGroup>
    <BuiButton>One</BuiButton>
    <BuiButton>Two</BuiButton>
    <BuiButton>Three</BuiButton>
</BuiButtonGroup>
<BuiButtonGroup>
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
            anchor="button-group"
            title="Button Group"
            desc={<>The buttons can be grouped by wrapping them with the <BuiCode>BuiButtonGroup</BuiCode> component. They need to be immediate children. All the standard button variants are supported.</>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <BuiButtonGroup>
                    <BuiButton>One</BuiButton>
                    <BuiButton>Two</BuiButton>
                    <BuiButton>Three</BuiButton>
                </BuiButtonGroup>
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

export default ButtonGroupSection;
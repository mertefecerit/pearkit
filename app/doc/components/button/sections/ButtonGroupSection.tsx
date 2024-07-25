import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButtonGroup, BuiTag, BuiButton} from "@/app/components/src";

function ButtonGroupSection(){
    const codeBlock =
`<BuiButtonGroup>
    <BuiButton label="One"/>
    <BuiButton label="Two"/>
    <BuiButton label="Three"/>
</BuiButtonGroup>
<BuiButtonGroup>
    <BuiButton variant="outlined" label="One"/>
    <BuiButton variant="outlined" label="Two"/>
    <BuiButton variant="outlined" label="Three"/>
</BuiButtonGroup>
<BuiButtonGroup>
    <BuiButton variant="text" label="One"/>
    <BuiButton variant="text" label="Two"/>
    <BuiButton variant="text" label="Three"/>
</BuiButtonGroup>`;
    return (
        <BuiComponentShowcaseArea
            anchor="button-group"
            title="Button Group"
            desc={<>The buttons can be grouped by wrapping them with the <BuiTag label="BuiButtonGroup"/> component. They need to be immediate children. All the standard button variants are supported.</>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <BuiButtonGroup>
                    <BuiButton label={"One"}/>
                    <BuiButton label={"Two"}/>
                    <BuiButton label={"Three"}/>
                </BuiButtonGroup>
                <BuiButtonGroup>
                    <BuiButton variant="outlined" label={"One"}/>
                    <BuiButton variant="outlined" label={"Two"}/>
                    <BuiButton variant="outlined" label={"Three"}/>
                </BuiButtonGroup>
                <BuiButtonGroup>
                    <BuiButton variant="text" label={"One"}/>
                    <BuiButton variant="text" label={"Two"}/>
                    <BuiButton variant="text" label={"Three"}/>
                </BuiButtonGroup>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default ButtonGroupSection;
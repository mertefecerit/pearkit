import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButtonGroup, PTag, PButton} from "@/app/components/src";

function ButtonGroupSection(){
    const codeBlock =
`<PButtonGroup>
    <PButton label="One"/>
    <PButton label="Two"/>
    <PButton label="Three"/>
</PButtonGroup>
<PButtonGroup>
    <PButton variant="outlined" label="One"/>
    <PButton variant="outlined" label="Two"/>
    <PButton variant="outlined" label="Three"/>
</PButtonGroup>
<PButtonGroup>
    <PButton variant="text" label="One"/>
    <PButton variant="text" label="Two"/>
    <PButton variant="text" label="Three"/>
</PButtonGroup>`;
    return (
        <PComponentShowcaseArea
            anchor="button-group"
            title="Button Group"
            desc={<>The buttons can be grouped by wrapping them with the <PTag label="PButtonGroup"/> component. They need to be immediate children. All the standard button variants are supported.</>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <PButtonGroup>
                    <PButton label={"One"}/>
                    <PButton label={"Two"}/>
                    <PButton label={"Three"}/>
                </PButtonGroup>
                <PButtonGroup>
                    <PButton variant="outlined" label={"One"}/>
                    <PButton variant="outlined" label={"Two"}/>
                    <PButton variant="outlined" label={"Three"}/>
                </PButtonGroup>
                <PButtonGroup>
                    <PButton variant="text" label={"One"}/>
                    <PButton variant="text" label={"Two"}/>
                    <PButton variant="text" label={"Three"}/>
                </PButtonGroup>
            </div>
        </PComponentShowcaseArea>
    )
}

export default ButtonGroupSection;
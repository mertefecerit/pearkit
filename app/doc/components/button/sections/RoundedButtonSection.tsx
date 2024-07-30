import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton} from "@/app/components/src";

function RoundedButtonSection() {
    const codeBlock = `<PButton rounded label="Button"/>
<PButton rounded variant="outlined" label="Button"/>
<PButton rounded variant="text" label="Button"/>
`;

    return (
        <PComponentShowcaseArea
            anchor="rounded"
            title="Rounded"
            desc={<>Rounded buttons have a circular border radius.</>}
            codeBlock={codeBlock}
        >
            <PButton rounded label="Button"/>
            <PButton rounded variant="outlined" label={"Button"}/>
            <PButton rounded variant="text" label={"Button"}/>
        </PComponentShowcaseArea>
    )
}

export default RoundedButtonSection;
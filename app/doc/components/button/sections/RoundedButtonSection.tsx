import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButton} from "@/app/components/src";

function RoundedButtonSection() {
    const codeBlock = `<BuiButton rounded label="Button"/>
<BuiButton rounded variant="outlined" label="Button"/>
<BuiButton rounded variant="text" label="Button"/>
`;

    return (
        <BuiComponentShowcaseArea
            anchor="rounded"
            title="Rounded"
            desc={<>Rounded buttons have a circular border radius.</>}
            codeBlock={codeBlock}
        >
            <BuiButton rounded label="Button"/>
            <BuiButton rounded variant="outlined" label={"Button"}/>
            <BuiButton rounded variant="text" label={"Button"}/>
        </BuiComponentShowcaseArea>
    )
}

export default RoundedButtonSection;
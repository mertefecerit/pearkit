import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton} from "@/app/components/src";

function DisabledButtonSection() {
    const codeBlock = `<PButton disabled label="Button"/>`;

    return (
        <PComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>You can give a bool value to disable the button.</>}
            codeBlock={codeBlock}
        >
            <PButton disabled label={"Button"}/>
        </PComponentShowcaseArea>
    )
}

export default DisabledButtonSection;
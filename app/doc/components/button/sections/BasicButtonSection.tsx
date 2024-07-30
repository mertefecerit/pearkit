import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton, PTag} from "@/app/components/src";

function BasicButtonSection() {
    const codeBlock = `<PButton label={"Button"}/>`;

    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>
                The text to be displayed on the button is defined on the button using the <PTag label="label"/> property.</>}
            codeBlock={codeBlock}
        >
            <PButton label={"Button"}/>
        </PComponentShowcaseArea>
    )
}

export default BasicButtonSection;
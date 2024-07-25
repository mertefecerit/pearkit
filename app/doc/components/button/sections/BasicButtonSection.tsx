import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButton, BuiTag} from "@/app/components/src";

function BasicButtonSection() {
    const codeBlock = `<BuiButton label={"Button"}/>`;

    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>
                The text to be displayed on the button is defined on the button using the <BuiTag label="label"/> property.</>}
            codeBlock={codeBlock}
        >
            <BuiButton label={"Button"}/>
        </BuiComponentShowcaseArea>
    )
}

export default BasicButtonSection;
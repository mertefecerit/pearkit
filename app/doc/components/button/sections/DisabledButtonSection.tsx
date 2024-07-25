import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButton} from "@/app/components/src";

function DisabledButtonSection() {
    const codeBlock = `<BuiButton disabled label="Button"/>`;

    return (
        <BuiComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>You can give a bool value to disable the button.</>}
            codeBlock={codeBlock}
        >
            <BuiButton disabled label={"Button"}/>
        </BuiComponentShowcaseArea>
    )
}

export default DisabledButtonSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiCard, BuiCode} from "@/app/components/src";

function BasicCardSection() {
    const codeBlock = `<BuiCard title="Simple Card">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, reprehenderit.</p>
</BuiCard>`
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>A simple Card is created with a <BuiCode>title</BuiCode> property along with the content as children.</>}
            codeBlock={codeBlock}
        >
            <BuiCard title="Simple Card">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, reprehenderit.</p>
            </BuiCard>
        </BuiComponentShowcaseArea>
    );
}

export default BasicCardSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiCard, BuiTag} from "@/app/components/src";

function BasicCardSection() {
    const codeBlock = `<BuiCard title="Simple Card">
    <div className="p-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, reprehenderit.</p>
    </div>
</BuiCard>`
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>A simple Card is created with a <BuiTag label="title"/> property along with the content as children.</>}
            codeBlock={codeBlock}
        >
            <BuiCard title="Simple Card">
                <div className={"p-4"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, reprehenderit.</p>
                </div>
            </BuiCard>
        </BuiComponentShowcaseArea>
    );
}

export default BasicCardSection;
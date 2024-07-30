import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PCard, PTag} from "@/app/components/src";

function BasicCardSection() {
    const codeBlock = `<PCard title="Simple Card">
    <div className="p-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, reprehenderit.</p>
    </div>
</PCard>`
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>A simple Card is created with a <PTag label="title"/> property along with the content as children.</>}
            codeBlock={codeBlock}
        >
            <PCard title="Simple Card">
                <div className={"p-4"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, reprehenderit.</p>
                </div>
            </PCard>
        </PComponentShowcaseArea>
    );
}

export default BasicCardSection;
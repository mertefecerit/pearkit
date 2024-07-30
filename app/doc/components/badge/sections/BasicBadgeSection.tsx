import {PBadge, PTag} from "@/app/components/src";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function BasicBadgeSection(){
    const codeBlock = `<PBadge value={1}/>`;
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Text to display is defined with the <PTag label="value"/> property.</>}
            codeBlock={codeBlock}
        >
            <PBadge value={1}/>
        </PComponentShowcaseArea>
    )
}

export default BasicBadgeSection
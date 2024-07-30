import {PBadge, PTag} from "@/app/components/src";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function SizesBadgeSection(){
    const codeBlock = `<PBadge value={7}/>
<PBadge color="sky" size="sm" value={65}/>
<PBadge color="orange" size="base" value={300}/>`;

    return (
        <PComponentShowcaseArea
            anchor="sizes"
            title="Sizes"
            desc={<>3 sizes available. Of these, <PTag label="xs"/> is selected by default, the other 2 options are <PTag label="sm"/> and <PTag label="base"/>.</>}
            codeBlock={codeBlock}
        >
            <PBadge value={7}/>
            <PBadge color="sky" size="sm" value={65}/>
            <PBadge color="orange" size="base" value={300}/>
        </PComponentShowcaseArea>
    )
}

export default SizesBadgeSection
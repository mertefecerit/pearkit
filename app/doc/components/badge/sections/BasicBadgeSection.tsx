import {BuiBadge, BuiTag} from "@/app/components/src";
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function BasicBadgeSection(){
    const codeBlock = `<BuiBadge value={1}/>`;
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Text to display is defined with the <BuiTag label="value"/> property.</>}
            codeBlock={codeBlock}
        >
            <BuiBadge value={1}/>
        </BuiComponentShowcaseArea>
    )
}

export default BasicBadgeSection
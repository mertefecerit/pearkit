import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiBadge from "@/app/components/BuiBadge";
import BuiCode from "@/app/components/BuiCode";

function SizesBadgeSection(){
    const codeBlock = `<BuiBadge value="7"/>
<BuiBadge color="sky" size="sm" value="65"/>
<BuiBadge color="rose" size="base" value="300"/>`;

    return (
        <BuiComponentShowcaseArea
            anchor="sizes"
            title="Sizes"
            desc={<>3 sizes available. Of these, <BuiCode>xs</BuiCode> is selected by default, the other 2 options are <BuiCode>sm</BuiCode> and <BuiCode>base</BuiCode>.</>}
            codeBlock={codeBlock}
        >
            <BuiBadge value="7"/>
            <BuiBadge color="sky" size="sm" value="65"/>
            <BuiBadge color="rose" size="base" value="300"/>
        </BuiComponentShowcaseArea>
    )
}

export default SizesBadgeSection
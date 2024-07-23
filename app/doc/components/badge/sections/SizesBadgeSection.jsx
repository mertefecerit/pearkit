import BuiBadge from "@/app/components/src/BuiBadge";
import BuiTag from "@/app/components/src/BuiTag";
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function SizesBadgeSection(){
    const codeBlock = `<BuiBadge value="7"/>
<BuiBadge color="sky" size="sm" value="65"/>
<BuiBadge color="rose" size="base" value="300"/>`;

    return (
        <BuiComponentShowcaseArea
            anchor="sizes"
            title="Sizes"
            desc={<>3 sizes available. Of these, <BuiTag>xs</BuiTag> is selected by default, the other 2 options are <BuiTag>sm</BuiTag> and <BuiTag>base</BuiTag>.</>}
            codeBlock={codeBlock}
        >
            <BuiBadge value="7"/>
            <BuiBadge color="sky" size="sm" value="65"/>
            <BuiBadge color="rose" size="base" value="300"/>
        </BuiComponentShowcaseArea>
    )
}

export default SizesBadgeSection
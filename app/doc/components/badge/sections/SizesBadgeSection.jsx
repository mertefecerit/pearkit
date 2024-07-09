import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiBadge from "@/app/components/BuiBadge";
import BuiCode from "@/app/components/BuiCode";

function SizesBadgeSection(){
    const codeBlock = `<BuiBadge value="1"/>`;
    return (
        <BuiComponentShowcaseArea
            anchor="sizes"
            title="Sizes"
            desc={<></>}
            codeBlock={codeBlock}
        >
            <BuiBadge value="1"/>
            <BuiBadge size="sm" value="1"/>
            <BuiBadge size="base" value="1"/>
        </BuiComponentShowcaseArea>
    )
}

export default SizesBadgeSection
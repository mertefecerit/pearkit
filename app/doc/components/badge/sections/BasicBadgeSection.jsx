import BuiBadge from "@/app/components/src/BuiBadge";
import BuiTag from "@/app/components/src/BuiTag";
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function BasicBadgeSection(){
    const codeBlock = `<BuiBadge value="1"/>`;
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Text to display is defined with the <BuiTag>value</BuiTag> property.</>}
            codeBlock={codeBlock}
        >
            <BuiBadge value="1"/>
        </BuiComponentShowcaseArea>
    )
}

export default BasicBadgeSection
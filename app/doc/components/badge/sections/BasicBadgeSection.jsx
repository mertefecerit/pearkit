import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiBadge from "@/app/components/BuiBadge";
import BuiCode from "@/app/components/BuiCode";

function BasicBadgeSection(){
    const codeBlock = `<BuiBadge value="1"/>`;
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Text to display is defined with the <BuiCode>value</BuiCode> property.</>}
            codeBlock={codeBlock}
        >
            <BuiBadge value="1"/>
        </BuiComponentShowcaseArea>
    )
}

export default BasicBadgeSection
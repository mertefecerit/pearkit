import BuiBadge from "@/app/components/src/BuiBadge";
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function PositionBadgeSection(){
    const codeBlock = `<div className="relative w-[100px] h-[50px] border rounded">
    <BuiBadge positions={{top: '-10px', right: '-10px'}} value="3"/>
</div>`;
    return (
        <BuiComponentShowcaseArea
            anchor="position"
            title="Position"
            desc={<></>}
            codeBlock={codeBlock}
        >
            <div className="relative w-[100px] h-[50px] border rounded">
                <BuiBadge positions={{top: '-10px', right: '-10px'}} value="3"/>
            </div>
            <div className="relative w-[100px] h-[50px] border rounded">
                <BuiBadge color="sky" positions={{bottom: '-10px', right: '-10px'}} value="3"/>
            </div>
            <div className="relative w-[100px] h-[50px] border rounded">
                <BuiBadge color="orange" positions={{top: '-10px', left: '-10px'}} value="3"/>
            </div>
            <div className="relative w-[100px] h-[50px] border rounded">
                <BuiBadge positions={{bottom: '-10px', left: '-10px'}} value="3"/>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default PositionBadgeSection
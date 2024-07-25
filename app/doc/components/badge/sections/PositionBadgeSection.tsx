import {BuiBadge} from "@/app/components/src";
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function PositionBadgeSection(){
    const codeBlock = `<div className="relative w-[100px] h-[50px] border rounded">
    <BuiBadge style={{position:'absolute', top: '-10px', right: '-10px'}} value={3}/>
</div>`;
    return (
        <BuiComponentShowcaseArea
            anchor="position"
            title="Position"
            desc={<>You can position a block element whose container is relative by using style values.</>}
            codeBlock={codeBlock}
        >
            <div className="relative w-[100px] h-[50px] border rounded">
                <BuiBadge style={{position:'absolute', top: '-10px', right: '-10px'}} value={3}/>
            </div>
            <div className="relative w-[100px] h-[50px] border rounded">
                <BuiBadge color="sky" style={{position:'absolute', bottom: '-10px', right: '-10px'}} value={3}/>
            </div>
            <div className="relative w-[100px] h-[50px] border rounded">
                <BuiBadge color="orange" style={{position:'absolute', top: '-10px', left: '-10px'}} value={3}/>
            </div>
            <div className="relative w-[100px] h-[50px] border rounded">
                <BuiBadge style={{position:'absolute', bottom: '-10px', left: '-10px'}} value={3}/>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default PositionBadgeSection
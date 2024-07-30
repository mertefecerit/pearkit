import {PBadge} from "@/app/components/src";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function PositionBadgeSection(){
    const codeBlock = `<div className="relative w-[100px] h-[50px] border rounded">
    <PBadge style={{position:'absolute', top: '-10px', right: '-10px'}} value={3}/>
</div>`;
    return (
        <PComponentShowcaseArea
            anchor="position"
            title="Position"
            desc={<>You can position a block element whose container is relative by using style values.</>}
            codeBlock={codeBlock}
        >
            <div className="relative w-[100px] h-[50px] border rounded">
                <PBadge style={{position:'absolute', top: '-10px', right: '-10px'}} value={3}/>
            </div>
            <div className="relative w-[100px] h-[50px] border rounded">
                <PBadge color="sky" style={{position:'absolute', bottom: '-10px', right: '-10px'}} value={3}/>
            </div>
            <div className="relative w-[100px] h-[50px] border rounded">
                <PBadge color="orange" style={{position:'absolute', top: '-10px', left: '-10px'}} value={3}/>
            </div>
            <div className="relative w-[100px] h-[50px] border rounded">
                <PBadge style={{position:'absolute', bottom: '-10px', left: '-10px'}} value={3}/>
            </div>
        </PComponentShowcaseArea>
    )
}

export default PositionBadgeSection
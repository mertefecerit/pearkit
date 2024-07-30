"use client";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton, PDrawer, PTag} from "@/app/components/src";
import {useState} from "react";
import {Icon} from "@iconify/react";

function PositionDrawerSection() {
    const [status, setStatus] = useState(false);
    const [pos, setPos] = useState('left')
    const codeBlock = `<PDrawer position="right">
    // Content
</PDrawer>`
    const clickHandler = (position:string) => {
        setPos(position);
        setStatus(true)
    }
    return (
        <PComponentShowcaseArea
            anchor="position"
            title="Position"
            desc={<>We have set four different positions for the drawer, of which the <PTag label={"left"}/> one is the default. The other three are <PTag label={"right"}/>, <PTag label={"bottom"}/> and <PTag label={"top"}/> values.</>}
            codeBlock={codeBlock}
        >
            <PButton onClick={() => clickHandler('left')} startIcon={<Icon icon="mdi:chevron-left" width={20}/>}/>
            <PButton onClick={() => clickHandler('right')} startIcon={<Icon icon="mdi:chevron-right" width={20}/>}/>
            <PButton onClick={() => clickHandler('bottom')} startIcon={<Icon icon="mdi:chevron-down" width={20}/>}/>
            <PButton onClick={() => clickHandler('top')} startIcon={<Icon icon="mdi:chevron-up" width={20}/>}/>

            <PDrawer
                position={pos}
                status={status}
                close={() => setStatus(false)}
            >
                <div className="p-4 text-xl flex items-center justify-center h-full">
                    <span>{pos} drawer</span>
                </div>
            </PDrawer>
        </PComponentShowcaseArea>
    );
}

export default PositionDrawerSection;
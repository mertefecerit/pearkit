"use client";
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButton, BuiDrawer, BuiTag} from "@/app/components/src";
import {useState} from "react";
import {Icon} from "@iconify/react";

function PositionDrawerSection() {
    const [status, setStatus] = useState(false);
    const [pos, setPos] = useState('left')
    const codeBlock = `<BuiDrawer position="right">
    // Content
</BuiDrawer>`
    const clickHandler = (position:string) => {
        setPos(position);
        setStatus(true)
    }
    return (
        <BuiComponentShowcaseArea
            anchor="position"
            title="Position"
            desc={<>We have set four different positions for the drawer, of which the <BuiTag label={"left"}/> one is the default. The other three are <BuiTag label={"right"}/>, <BuiTag label={"bottom"}/> and <BuiTag label={"top"}/> values.</>}
            codeBlock={codeBlock}
        >
            <BuiButton onClick={() => clickHandler('left')} startIcon={<Icon icon="mdi:chevron-left" width={20}/>}/>
            <BuiButton onClick={() => clickHandler('right')} startIcon={<Icon icon="mdi:chevron-right" width={20}/>}/>
            <BuiButton onClick={() => clickHandler('bottom')} startIcon={<Icon icon="mdi:chevron-down" width={20}/>}/>
            <BuiButton onClick={() => clickHandler('top')} startIcon={<Icon icon="mdi:chevron-up" width={20}/>}/>

            <BuiDrawer
                position={pos}
                status={status}
                close={() => setStatus(false)}
            >
                <div className="p-4 text-xl flex items-center justify-center h-full">
                    <span>{pos} drawer</span>
                </div>
            </BuiDrawer>
        </BuiComponentShowcaseArea>
    );
}

export default PositionDrawerSection;
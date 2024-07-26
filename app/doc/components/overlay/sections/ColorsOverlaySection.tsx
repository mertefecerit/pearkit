"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {useState} from "react";
import {BuiButton, BuiCard, BuiOverlay, BuiTag} from "@/app/components/src";
import {TwColor} from "@/app/components/src/types/TwColor";

function ColorsOverlaySection() {
    const [overlayStatus,setOverlayStatus] = useState(false);
    const codeBlock = `<BuiOverlay color="yellow">`;
    const [color, setColor] = useState('yellow')
    const setOverlay = (color:TwColor) => {
        setColor(color)
        setOverlayStatus(true);
    }
    return (
        <BuiComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <BuiTag color={"sky"} label={"sky"}/> <BuiTag color={"red"} label={"red"}/> <BuiTag color={"indigo"} label={"indigo"}/></>}
            codeBlock={codeBlock}
        >
            <BuiButton color="yellow" onClick={() => setOverlay('yellow')} label={"Open Yellow Overlay"}/>
            <BuiButton color="red" onClick={() => setOverlay('red')} label={"Open Red Overlay"}/>
            <BuiButton color="indigo" onClick={() => setOverlay('indigo')} label={"Open Indigo Overlay"}/>

            <BuiOverlay color={color} className="justify-center p-8" status={overlayStatus} close={() => setOverlayStatus(false)}>
                <BuiCard className={"p-4"} title={color + ' Overlay'}>
                    <div className="flex flex-col gap-8 items-center">
                        <BuiButton onClick={() => setOverlayStatus(false)} color="gray" label={"Close Overlay"}/>
                        <span>Or Click Outside</span>
                    </div>
                </BuiCard>
            </BuiOverlay>
        </BuiComponentShowcaseArea>
    );
}

export default ColorsOverlaySection;
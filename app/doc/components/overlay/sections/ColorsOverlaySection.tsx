"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {useState} from "react";
import {PButton, PCard, POverlay, PTag} from "@/app/components/src";
import {TwColor} from "@/app/components/src/types/TwColor";

function ColorsOverlaySection() {
    const [overlayStatus,setOverlayStatus] = useState(false);
    const codeBlock = `<POverlay color="yellow">`;
    const [color, setColor] = useState('yellow')
    const setOverlay = (color:TwColor) => {
        setColor(color)
        setOverlayStatus(true);
    }
    return (
        <PComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <PTag color={"sky"} label={"sky"}/> <PTag color={"red"} label={"red"}/> <PTag color={"indigo"} label={"indigo"}/></>}
            codeBlock={codeBlock}
        >
            <PButton color="yellow" onClick={() => setOverlay('yellow')} label={"Open Yellow Overlay"}/>
            <PButton color="red" onClick={() => setOverlay('red')} label={"Open Red Overlay"}/>
            <PButton color="indigo" onClick={() => setOverlay('indigo')} label={"Open Indigo Overlay"}/>

            <POverlay color={color} className="justify-center p-8" status={overlayStatus} close={() => setOverlayStatus(false)}>
                <PCard className={"p-4"} title={color + ' Overlay'}>
                    <div className="flex flex-col gap-8 items-center">
                        <PButton onClick={() => setOverlayStatus(false)} color="gray" label={"Close Overlay"}/>
                        <span>Or Click Outside</span>
                    </div>
                </PCard>
            </POverlay>
        </PComponentShowcaseArea>
    );
}

export default ColorsOverlaySection;
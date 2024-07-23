"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {useState} from "react";
import {BuiButton, BuiCard, BuiOverlay, BuiInput} from "@/app/components/src";
import BuiTag from "../../../../components/src/BuiTag";

function ColorsOverlaySection() {
    const [overlayStatus,setOverlayStatus] = useState(false);
    const codeBlock = `<BuiOverlay color="yellow">`;
    const [color, setColor] = useState('yellow')
    const setOverlay = (color) => {
        setColor(color)
        setOverlayStatus(true);

    }
    return (
        <BuiComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <BuiTag label={"sky"}/> <BuiTag label={"red"}/> <BuiTag label={"indigo"}/></>}
            codeBlock={codeBlock}
        >
            <BuiButton color="yellow" onClick={() => setOverlay('yellow')}>Open Yellow Overlay</BuiButton>
            <BuiButton color="red" onClick={() => setOverlay('red')}>Open Red Overlay</BuiButton>
            <BuiButton color="indigo" onClick={() => setOverlay('indigo')}>Open Indigo Overlay</BuiButton>

            <BuiOverlay color={color} className="justify-center p-8" status={overlayStatus} close={() => setOverlayStatus(false)}>
                <BuiCard title={color + ' Overlay'}>
                    <div className="flex flex-col gap-8 items-center">
                        <BuiButton onClick={() => setOverlayStatus(false)} color="gray">Close Overlay</BuiButton>
                        <span>Or Click Outside</span>
                    </div>
                </BuiCard>
            </BuiOverlay>
        </BuiComponentShowcaseArea>
    );
}

export default ColorsOverlaySection;
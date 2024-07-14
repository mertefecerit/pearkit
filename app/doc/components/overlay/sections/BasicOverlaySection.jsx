"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiOverlay from "@/app/components/src/BuiOverlay";
import {useState} from "react";
import {BuiButton} from "@/app/components/src";

function BasicOverlaySection() {
    const [overlayStatus,setOverlayStatus] = useState(false);
    const codeBlock = `const [overlayStatus,setOverlayStatus] = useState(false);
    
<BuiOverlay status={overlayStatus} close={() => setOverlayStatus(false)}>
`
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<></>}
            codeBlock={codeBlock}
        >
            <BuiButton onClick={() => setOverlayStatus(true)}>Open Overlay</BuiButton>
            <BuiOverlay status={overlayStatus} close={() => setOverlayStatus(false)}>
                <div className="bg-white p-8">
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam.</p>
                        <BuiButton onClick={() => setOverlayStatus(false)}>X</BuiButton>
                    </div>
                </div>
            </BuiOverlay>
        </BuiComponentShowcaseArea>
    );
}

export default BasicOverlaySection;
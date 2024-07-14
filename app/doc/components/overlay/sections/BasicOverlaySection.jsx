"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {useState} from "react";
import {BuiButton, BuiCard, BuiOverlay, BuiInput} from "@/app/components/src";

function BasicOverlaySection() {
    const [overlayStatus,setOverlayStatus] = useState(false);
    const codeBlock = `const [overlayStatus,setOverlayStatus] = useState(false);

<BuiOverlay status={overlayStatus} close={() => setOverlayStatus(false)}>
// any element or component
</BuiOverlay>
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
                <BuiCard title="Login Screen" subTitle="Welcome again. Please login.">
                    <div className="flex flex-col gap-8">
                        <BuiInput placeholder="info@example.com" onChange={() => null}></BuiInput>
                        <BuiInput placeholder="********" type="password" onChange={() => null}></BuiInput>
                        <div className="flex gap-2">
                            <BuiButton onClick={() => null}>Login</BuiButton>
                            <BuiButton onClick={() => setOverlayStatus(false)} color="gray">Cancel</BuiButton>
                        </div>
                    </div>
                </BuiCard>
            </BuiOverlay>
        </BuiComponentShowcaseArea>
    );
}

export default BasicOverlaySection;
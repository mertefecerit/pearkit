"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {useState} from "react";
import {BuiButton, BuiCard, BuiOverlay, BuiInput} from "@/app/components/src";

function BasicOverlaySection() {
    const [overlayStatus,setOverlayStatus] = useState(false);
    const codeBlock = `const [overlayStatus,setOverlayStatus] = useState(false);

<BuiOverlay status={overlayStatus} close={() => setOverlayStatus(false)}>
    <LoginComponent />
</BuiOverlay>

//Login Component

<BuiCard className={"p-8"} title="Login Screen" subTitle="Welcome again. Please login.">
<div className="flex flex-col gap-8">
    <BuiInput placeholder="info@example.com" onChange={() => null}/>
    <BuiInput placeholder="********" type="password" onChange={() => null}/>
    <div className="flex gap-2">
        <BuiButton onClick={() => null} label={"Login"}></BuiButton>
        <BuiButton variant="text" onClick={() => setOverlayStatus(false)} color="gray" label="Cancel"/>
    </div>
</div>
</BuiCard>
`
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>A standard overlay usage. Whether you use our BuiCard component or do it yourself, it will answer all of them.</>}
            codeBlock={codeBlock}
        >
            <BuiButton onClick={() => setOverlayStatus(true)} label={"Open Overlay"}/>
            <BuiOverlay
                className="justify-center p-8"
                status={overlayStatus}
                close={() => setOverlayStatus(false)}
            >
                <BuiCard className={"p-8"} title="Login Screen" subTitle="Welcome again. Please login.">
                    <div className="flex flex-col gap-8">
                        <BuiInput placeholder="info@example.com" onChange={() => null}/>
                        <BuiInput placeholder="********" type="password" onChange={() => null}/>
                        <div className="flex gap-2">
                            <BuiButton onClick={() => null} label={"Login"}></BuiButton>
                            <BuiButton variant="text" onClick={() => setOverlayStatus(false)} color="gray" label="Cancel"/>
                        </div>
                    </div>
                </BuiCard>
            </BuiOverlay>
        </BuiComponentShowcaseArea>
    );
}

export default BasicOverlaySection;
"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {useState} from "react";
import {PButton, PCard, POverlay, PInput} from "@/app/components/src";

function BasicOverlaySection() {
    const [overlayStatus,setOverlayStatus] = useState(false);
    const codeBlock = `const [overlayStatus,setOverlayStatus] = useState(false);

<POverlay status={overlayStatus} close={() => setOverlayStatus(false)}>
    <LoginComponent />
</POverlay>

//Login Component

<PCard className={"p-8"}>
<div className="flex flex-col gap-8">
    <h1 className="text-2xl font-bold mb-2">Login Screen</h1>
    <h2 className="text-gray-500 mb-4">Welcome again. Please login.</h2>
    <PInput placeholder="info@example.com" onChange={() => null}/>
    <PInput placeholder="********" type="password" onChange={() => null}/>
    <div className="flex gap-2">
        <PButton onClick={() => null} label={"Login"}></PButton>
        <PButton variant="text" onClick={() => setOverlayStatus(false)} color="gray" label="Cancel"/>
    </div>
</div>
</PCard>
`
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>A standard overlay usage. Whether you use our PCard component or do it yourself, it will answer all of them.</>}
            codeBlock={codeBlock}
        >
            <PButton onClick={() => setOverlayStatus(true)} label={"Open Overlay"}/>
            <POverlay
                className="justify-center p-8"
                status={overlayStatus}
                close={() => setOverlayStatus(false)}
            >
                <PCard className={"p-8"}>
                    <h1 className="text-2xl font-bold mb-2">Login Screen</h1>
                    <h2 className="text-gray-500 mb-4">Welcome again. Please login.</h2>
                    <div className="flex flex-col gap-8">
                        <PInput placeholder="info@example.com" onChange={() => null}/>
                        <PInput placeholder="********" type="password" onChange={() => null}/>
                        <div className="flex gap-2">
                            <PButton onClick={() => null} label={"Login"}></PButton>
                            <PButton variant="text" onClick={() => setOverlayStatus(false)} color="gray"
                                       label="Cancel"/>
                        </div>
                    </div>
                </PCard>
            </POverlay>
        </PComponentShowcaseArea>
    );
}

export default BasicOverlaySection;
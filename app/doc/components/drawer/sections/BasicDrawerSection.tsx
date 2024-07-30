"use client";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton, PDrawer, PTag} from "@/app/components/src";
import {useState} from "react";
import PNav from "@/app/doc/layout-partials/PNavAside/PNav";

function BasicDrawerSection() {
    const [status, setStatus] = useState(false);
    const codeBlock = `const [status, setStatus] = useState(false);

<PDrawer status={status} close={() => setStatus(false)}>
    <div className="p-4 w-[300px]">
        <PNav />
    </div>
</PDrawer>`
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>The drawer is controlled through the <PTag label="status"/> and <PTag label={"close"} /> props via the useState hook. It is also measured by the size of the content.</>}
            codeBlock={codeBlock}
        >
            <PButton onClick={() => setStatus(true)} label={"Open Drawer"}/>
            <PDrawer
                status={status}
                close={() => setStatus(false)}
            >
                <div className="p-4 w-[300px]">
                    <PNav />
                </div>
            </PDrawer>
        </PComponentShowcaseArea>
    );
}

export default BasicDrawerSection;
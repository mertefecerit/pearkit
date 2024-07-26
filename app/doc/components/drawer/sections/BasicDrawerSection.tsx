"use client";
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButton, BuiDrawer, BuiTag} from "@/app/components/src";
import {useState} from "react";
import BuiNav from "@/app/doc/layout-partials/BuiNavAside/BuiNav";

function BasicDrawerSection() {
    const [status, setStatus] = useState(false);
    const codeBlock = `const [status, setStatus] = useState(false);

<BuiDrawer status={status} close={() => setStatus(false)}>
    <div className="p-4 w-[300px]">
        <BuiNav />
    </div>
</BuiDrawer>`
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>The drawer is controlled through the <BuiTag label="status"/> and <BuiTag label={"close"} /> props via the useState hook. It is also measured by the size of the content.</>}
            codeBlock={codeBlock}
        >
            <BuiButton onClick={() => setStatus(true)} label={"Open Drawer"}/>
            <BuiDrawer
                status={status}
                close={() => setStatus(false)}
            >
                <div className="p-4 w-[300px]">
                    <BuiNav />
                </div>
            </BuiDrawer>
        </BuiComponentShowcaseArea>
    );
}

export default BasicDrawerSection;
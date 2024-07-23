"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiModal, BuiTag, BuiButton} from "@/app/components/src";
import {useState} from "react";
import Link from "next/link";

function BasicModalSection() {
    const [modalStatus,setModalStatus] = useState(false);
    const codeBlock = `const [modalStatus,setModalStatus] = useState(false);
    
<BuiButton onClick={() => setModalStatus(true)}>Open Basic Modal</BuiButton>
<BuiModal
    modalTitle="Lorem Ipsum Modal"
    status={modalStatus}
    close={() => setModalStatus(false)}
>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, sequi.</p>
</BuiModal>`
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>A simple modal component wrapped into an <BuiTag label={<Link href="/doc/components/overlay" target="_blank">BuiOverlay</Link>}></BuiTag> component.</>}
            codeBlock={codeBlock}
        >
            <BuiButton onClick={() => setModalStatus(true)}>Open Basic Modal</BuiButton>
            <BuiModal
                modalTitle="Lorem Ipsum Modal"
                status={modalStatus}
                close={() => setModalStatus(false)}
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, sequi.</p>
            </BuiModal>
        </BuiComponentShowcaseArea>
    );
}

export default BasicModalSection;
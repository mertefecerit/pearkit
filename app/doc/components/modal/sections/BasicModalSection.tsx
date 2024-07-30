"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PModal, PTag, PButton} from "@/app/components/src";
import {useState} from "react";
import Link from "next/link";

function BasicModalSection() {
    const [modalStatus,setModalStatus] = useState(false);
    const codeBlock = `const [modalStatus,setModalStatus] = useState(false);
    
<PButton onClick={() => setModalStatus(true)}>Open Basic Modal</PButton>
<PModal
    modalTitle="Lorem Ipsum Modal"
    status={modalStatus}
    close={() => setModalStatus(false)}
>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, sequi.</p>
</PModal>`
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>A simple modal component wrapped into an <PTag label={<Link href="/doc/components/overlay" target="_blank">POverlay</Link>}></PTag> component.</>}
            codeBlock={codeBlock}
        >
            <PButton onClick={() => setModalStatus(true)} label="Open Basic Modal"/>
            <PModal
                modalTitle="Lorem Ipsum Modal"
                status={modalStatus}
                close={() => setModalStatus(false)}
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, sequi.</p>
            </PModal>
        </PComponentShowcaseArea>
    );
}

export default BasicModalSection;
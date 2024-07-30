"use client";

import React from 'react';
import {PTag, usePToast} from "@/app/components/src";
import {PButton} from "@/app/components/src";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

const StatusToastSection = () => {
    const codeBlock = `const toast = usePToast();

    const showToast = (type) => {
        toast.fire({
            title: 'Success Toast Title',
            message: 'Success toast message...',
            type // 'error', 'success', 'warning' and 'info'
        });
    }
    
<PButton color={"blue"} onClick={() => showToast('info')} label="Show Info Toast"/>
<PButton color={"red"} onClick={() => showToast('error')} label="Show Error Toast"/>
<PButton color={"yellow"} onClick={() => showToast('warning')} label="Show Warning Toast"/>
<PButton color={"green"} onClick={() => showToast('success')} label="Show Success Toast"/>`
    const toast = usePToast();
    const showToast = (type:string) => {
        toast.fire({
            title: 'Success Toast Title',
            message: 'Success toast message...',
            type
        },{position: 'top-end',timeout:3000});
    }
    return (
        <PComponentShowcaseArea
            anchor="status"
            title="Status"
            desc={<>You can handle 4 different situations here. The values are <PTag label={"info (default)"}/>, <PTag color="red" label={"error"}/>, <PTag color={"green"} label={"success"}/> and <PTag color={"yellow"} label={"warning"}/>.</>}
            codeBlock={codeBlock}
        >
            <PButton color={"blue"} onClick={() => showToast('info')} label="Show Info Toast"/>
            <PButton color={"red"} onClick={() => showToast('error')} label="Show Error Toast"/>
            <PButton color={"yellow"} onClick={() => showToast('warning')} label="Show Warning Toast"/>
            <PButton color={"green"} onClick={() => showToast('success')} label="Show Success Toast"/>
        </PComponentShowcaseArea>
    );
};

export default StatusToastSection;
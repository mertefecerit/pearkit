"use client";

import React from 'react';
import {BuiTag, useBuiToast} from "@/app/components/src";
import {BuiButton} from "@/app/components/src";
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

const StatusToastSection = () => {
    const codeBlock = `const toast = useBuiToast();

    const showToast = (type) => {
        toast.fire({
            title: 'Success Toast Title',
            message: 'Success toast message...',
            type // 'error', 'success', 'warning' and 'info'
        });
    }
    
<BuiButton onClick={() => showToast('info')} label="Show Info Toast"/>
<BuiButton color={"red"} onClick={() => showToast('error')} label="Show Error Toast"/>
<BuiButton color={"yellow"} onClick={() => showToast('warning')} label="Show Warning Toast"/>
<BuiButton color={"green"} onClick={() => showToast('success')} label="Show Success Toast"/>`
    const toast = useBuiToast();
    const showToast = (type:string) => {
        toast.fire({
            title: 'Success Toast Title',
            message: 'Success toast message...',
            type
        },{position: 'top-end',timeout:3000});
    }
    return (
        <BuiComponentShowcaseArea
            anchor="status"
            title="Status"
            desc={<>You can handle 4 different situations here. The values are <BuiTag label={"info (default)"}/>, <BuiTag color="red" label={"error"}/>, <BuiTag color={"green"} label={"success"}/> and <BuiTag color={"yellow"} label={"warning"}/>.</>}
            codeBlock={codeBlock}
        >
            <BuiButton onClick={() => showToast('info')} label="Show Info Toast"/>
            <BuiButton color={"red"} onClick={() => showToast('error')} label="Show Error Toast"/>
            <BuiButton color={"yellow"} onClick={() => showToast('warning')} label="Show Warning Toast"/>
            <BuiButton color={"green"} onClick={() => showToast('success')} label="Show Success Toast"/>
        </BuiComponentShowcaseArea>
    );
};

export default StatusToastSection;
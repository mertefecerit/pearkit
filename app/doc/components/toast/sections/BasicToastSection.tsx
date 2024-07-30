"use client";

import React from 'react';
import {BuiTag, useBuiToast} from "@/app/components/src";
import {BuiButton} from "@/app/components/src";
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

const BasicToastSection = () => {
    const codeBlock = `const toast = useBuiToast();

    const showToast = () => {
        toast.fire({
            title: 'Success Toast Title',
            message: 'Success toast message...'
        });
    }
    
<BuiButton onClick={showToast} label="Show Info Toast"/>
    `
    const toast = useBuiToast();
    const showToast = () => {
        toast.fire({
            title: 'Success Toast Title',
            message: 'Success toast message...',
        },{position: 'top-end',timeout:3000});
    }
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>This is standard use of the toast component. Use <BuiTag label={"useBuiToast"} /> hook and access the fire function.</>}
            codeBlock={codeBlock}
        >
            <BuiButton onClick={showToast} label="Show Info Toast"/>
        </BuiComponentShowcaseArea>
    );
};

export default BasicToastSection;
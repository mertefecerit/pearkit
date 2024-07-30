"use client";

import React from 'react';
import {PTag, usePToast} from "@/app/components/src";
import {PButton} from "@/app/components/src";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

const BasicToastSection = () => {
    const codeBlock = `const toast = usePToast();

    const showToast = () => {
        toast.fire({
            title: 'Success Toast Title',
            message: 'Success toast message...'
        });
    }
    
<PButton onClick={showToast} label="Show Info Toast"/>
    `
    const toast = usePToast();
    const showToast = () => {
        toast.fire({
            title: 'Success Toast Title',
            message: 'Success toast message...',
        },{position: 'top-end',timeout:3000});
    }
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>This is standard use of the toast component. Use <PTag label={"usePToast"} /> hook and access the fire function.</>}
            codeBlock={codeBlock}
        >
            <PButton onClick={showToast} label="Show Info Toast"/>
        </PComponentShowcaseArea>
    );
};

export default BasicToastSection;
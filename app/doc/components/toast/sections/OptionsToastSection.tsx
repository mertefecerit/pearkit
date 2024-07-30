"use client";

import React from 'react';
import {useBuiToast} from "@/app/components/src";
import {BuiButton, BuiTag} from "@/app/components/src";
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

const OptionsToastSection = () => {
    const codeBlock = `const toast = useBuiToast();

    const showToast = (type) => {
        toast.fire({
            title: 'Success Toast Title',
            message: 'Success toast message...',
            type
        },{
            position: 'bottom-end',
            timeout: 1000
        });
    }
    
<BuiButton onClick={() => showToast('info')} label="Show Info Toast"/>
    `
    const toast = useBuiToast();
    const showToast = (type:string, position:string) => {
        toast.fire({
            title: 'Success Toast Title',
            message: 'Success toast message...',
            type,
        },{position, timeout:1000});
    }
    return (
        <BuiComponentShowcaseArea
            anchor="options"
            title="Options"
            desc={<>For toast options, config is written to the <BuiTag label="second parameter"/> of the <BuiTag label={"fire"}/> method.
                Here you can give 4 different values to the <BuiTag label={"position"}/> key in the config. These values are <BuiTag label="top-start"/>, <BuiTag label="top-end (default)"/>, <BuiTag label="bottom-end"/> and <BuiTag label="bottom-start"/>.
                And you can give <BuiTag label={"number"} /> values to the <BuiTag label={"timeout"}/> key in the config.
                Note: Since there is only one provider here, instant changes to the config file affect all toasts.</>}
            codeBlock={codeBlock}
        >
            <BuiButton onClick={() => showToast('info','top-start')} label="Top Start Toast"/>
            <BuiButton onClick={() => showToast('info','top-end')} label="Top End Toast"/>
            <BuiButton onClick={() => showToast('info','bottom-start')} label="Bottom Start Toast"/>
            <BuiButton onClick={() => showToast('info','bottom-end')} label="Bottom End Toast"/>
        </BuiComponentShowcaseArea>
    );
};

export default OptionsToastSection;
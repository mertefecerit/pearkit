"use client";

import React from 'react';
import {usePToast} from "@/app/components/src";
import {PButton, PTag} from "@/app/components/src";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

const OptionsToastSection = () => {
    const codeBlock = `const toast = usePToast();

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
    
<PButton onClick={() => showToast('info')} label="Show Info Toast"/>
    `
    const toast = usePToast();
    const showToast = (type:string, position:string) => {
        toast.fire({
            title: 'Success Toast Title',
            message: 'Success toast message...',
            type,
        },{position, timeout:1000});
    }
    return (
        <PComponentShowcaseArea
            anchor="options"
            title="Options"
            desc={<>For toast options, config is written to the <PTag label="second parameter"/> of the <PTag label={"fire"}/> method.
                Here you can give 4 different values to the <PTag label={"position"}/> key in the config. These values are <PTag label="top-start"/>, <PTag label="top-end (default)"/>, <PTag label="bottom-end"/> and <PTag label="bottom-start"/>.
                And you can give <PTag label={"number"} /> values to the <PTag label={"timeout"}/> key in the config.
                Note: Since there is only one provider here, instant changes to the config file affect all toasts.</>}
            codeBlock={codeBlock}
        >
            <PButton onClick={() => showToast('info','top-start')} label="Top Start Toast"/>
            <PButton onClick={() => showToast('info','top-end')} label="Top End Toast"/>
            <PButton onClick={() => showToast('info','bottom-start')} label="Bottom Start Toast"/>
            <PButton onClick={() => showToast('info','bottom-end')} label="Bottom End Toast"/>
        </PComponentShowcaseArea>
    );
};

export default OptionsToastSection;
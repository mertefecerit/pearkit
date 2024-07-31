"use client";

import React, {useState} from 'react';
import {Icon} from "@iconify/react";

const NpmArea = () => {
    const [copiedText, setCopiedText] = useState(false);
    const copyHandler = () => {
        setCopiedText(true);
        navigator.clipboard.writeText('npm i pearkit')
        setTimeout(() => {
            setCopiedText(false);
        },500)
    }
    return (
        <div onClick={copyHandler} className={"w-[200px] cursor-pointer hover:bg-lime-500/5 bg-white border rounded-xl px-4 py-2 shadow-inner flex gap-4 items-center justify-between dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800"}>
            <code>
                {copiedText ? 'Copied' : 'npm i pearkit'}
            </code>
            <span>
                <Icon icon={"mdi:content-copy"}/>
            </span>
        </div>
    );
};

export default NpmArea;
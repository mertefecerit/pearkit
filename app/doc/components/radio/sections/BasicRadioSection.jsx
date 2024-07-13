"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {useState} from "react";
import {BuiCode, BuiRadio} from "@/app/components/src";

function BasicRadioSection() {
    const [option,setOption] = useState('option1');
    const codeBlock = `const [option, setOption] = useState('option1');

<BuiRadio
    label="Option 1"
    name="options"
    value="option1"
    checked={option === 'option1'}
    onChange={(e) => setOption(e.target.value)}
/>
<BuiRadio
    label="Option 2"
    name="options"
    value="option2"
    checked={option === 'option2'}
    onChange={(e) => setOption(e.target.value)}
/>     
`;
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Just as it receives all input attributes, you can also send a <BuiCode>label</BuiCode> prop. Here is a simple usage.</>}
            codeBlock={codeBlock}
        >
            <BuiRadio
                label="Option 1"
                name="options"
                value="option1"
                checked={option === 'option1'}
                onChange={(e) => setOption(e.target.value)}
            />
            <BuiRadio
                label="Option 2"
                name="options"
                value="option2"
                checked={option === 'option2'}
                onChange={(e) => setOption(e.target.value)}
            />
        </BuiComponentShowcaseArea>
    );
}
export default BasicRadioSection;
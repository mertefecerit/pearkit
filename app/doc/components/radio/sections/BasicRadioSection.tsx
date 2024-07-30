"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {useState} from "react";
import {PTag, PRadio} from "@/app/components/src";

function BasicRadioSection() {
    const [option,setOption] = useState('option1');
    const codeBlock = `const [option, setOption] = useState('option1');

<PRadio
    label="Option 1"
    name="options"
    value="option1"
    checked={option === 'option1'}
    onChange={(e) => setOption(e.target.value)}
/>
<PRadio
    label="Option 2"
    name="options"
    value="option2"
    checked={option === 'option2'}
    onChange={(e) => setOption(e.target.value)}
/>     
`;
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Just as it receives all input attributes, you can also send a <PTag label={"label"}/> prop. Here is a simple usage.</>}
            codeBlock={codeBlock}
        >
            <PRadio
                label="Option 1"
                name="options"
                value="option1"
                checked={option === 'option1'}
                onChange={(e) => setOption(e.target.value)}
            />
            <PRadio
                label="Option 2"
                name="options"
                value="option2"
                checked={option === 'option2'}
                onChange={(e) => setOption(e.target.value)}
            />
        </PComponentShowcaseArea>
    );
}
export default BasicRadioSection;
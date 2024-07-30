"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag, PSwitch} from "@/app/components/src";
import {useState} from "react";

function DisabledSwitchSection() {
    const [value1, setValue1] = useState(false);
    const [value2, setValue2] = useState(true);
    const [value3, setValue3] = useState(true);
    const codeBlock = `<PSwitch disabled />`;
    return (
        <PComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>For the <PTag label={"disabled"}/> property, it is sufficient to provide the property itself directly.</>}
            codeBlock={codeBlock}
        >
            <PSwitch disabled color="orange" checked={value1} onChange={() => setValue1(!value1)}/>
            <PSwitch disabled color="green" checked={value2} onChange={() => setValue2(!value2)}/>
            <PSwitch disabled color="indigo" checked={value3} onChange={() => setValue3(!value3)}/>
        </PComponentShowcaseArea>
    );
}

export default DisabledSwitchSection;
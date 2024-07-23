"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTag, BuiSwitch} from "@/app/components/src";
import {useState} from "react";

function DisabledSwitchSection() {
    const [value1, setValue1] = useState(false);
    const [value2, setValue2] = useState(true);
    const [value3, setValue3] = useState(true);
    const codeBlock = `<BuiSwitch disabled />`;
    return (
        <BuiComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>For the <BuiTag label={"disabled"}/> property, it is sufficient to provide the property itself directly.</>}
            codeBlock={codeBlock}
        >
            <BuiSwitch disabled color="orange" checked={value1} onChange={() => setValue1(!value1)}/>
            <BuiSwitch disabled color="green" checked={value2} onChange={() => setValue2(!value2)}/>
            <BuiSwitch disabled color="indigo" checked={value3} onChange={() => setValue3(!value3)}/>
        </BuiComponentShowcaseArea>
    );
}

export default DisabledSwitchSection;
"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PSwitch} from "@/app/components/src";
import {useState} from "react";

function BasicSwitchSection() {
    const [value, setValue] = useState(false);
    const codeBlock = `const [value, setValue] = useState(false);

<PSwitch checked={value} onChange={() => setValue(!value)}/>`
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Standard switch component for form components</>}
            codeBlock={codeBlock}
        >
            <PSwitch checked={value} onChange={() => setValue(!value)}/>
        </PComponentShowcaseArea>
    );
}

export default BasicSwitchSection;
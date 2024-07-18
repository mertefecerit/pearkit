"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiSwitch} from "@/app/components/src";
import {useState} from "react";

function BasicSwitchSection() {
    const [value, setValue] = useState(false);
    const codeBlock = `const [value, setValue] = useState(false);

<BuiSwitch checked={value} onChange={() => setValue(!value)}/>`
    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Standard switch component for form components</>}
            codeBlock={codeBlock}
        >
            <BuiSwitch checked={value} onChange={() => setValue(!value)}/>
        </BuiComponentShowcaseArea>
    );
}

export default BasicSwitchSection;
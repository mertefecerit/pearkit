"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTag, BuiSwitch} from "@/app/components/src";
import {useState} from "react";

function ColorsSwitchSection() {
    const [value1, setValue1] = useState(true);
    const [value2, setValue2] = useState(true);
    const [value3, setValue3] = useState(true);
    const codeBlock = `<BuiSwitch disabled color="orange" />`;
    return (
        <BuiComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <BuiTag label="sky"/> <BuiTag label="red"/> <BuiTag label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <BuiSwitch color="orange" checked={value1} onChange={() => setValue1(!value1)}/>
            <BuiSwitch color="green" checked={value2} onChange={() => setValue2(!value2)}/>
            <BuiSwitch color="indigo" checked={value3} onChange={() => setValue3(!value3)}/>
        </BuiComponentShowcaseArea>
    );
}

export default ColorsSwitchSection;
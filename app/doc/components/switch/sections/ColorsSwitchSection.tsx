"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag, PSwitch} from "@/app/components/src";
import {useState} from "react";

function ColorsSwitchSection() {
    const [value1, setValue1] = useState(true);
    const [value2, setValue2] = useState(true);
    const [value3, setValue3] = useState(true);
    const codeBlock = `<PSwitch disabled color="orange" />`;
    return (
        <PComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <PTag color={"sky"} label="sky"/> <PTag color={"red"} label="red"/> <PTag color={"indigo"} label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <PSwitch color="orange" checked={value1} onChange={() => setValue1(!value1)}/>
            <PSwitch color="green" checked={value2} onChange={() => setValue2(!value2)}/>
            <PSwitch color="indigo" checked={value3} onChange={() => setValue3(!value3)}/>
        </PComponentShowcaseArea>
    );
}

export default ColorsSwitchSection;
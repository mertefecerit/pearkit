"use client"
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag, PCheckbox} from "@/app/components/src";
import {useState} from "react";

function ColorsCheckboxSection() {
    const codeBlock = `<PCheckbox />
<PCheckbox color="red" />
<PCheckbox color="orange" />
<PCheckbox color="indigo" />
<PCheckbox color="green" />`;
    const [ch1, setCh1] = useState(true)
    const [ch2, setCh2] = useState(true)
    const [ch3, setCh3] = useState(true)
    const [ch4, setCh4] = useState(true)
    const [ch5, setCh5] = useState(true)
    return (
        <PComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <PTag color={"sky"} label="sky"/> <PTag color={"red"} label="red"/> <PTag color={"indigo"} label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <PCheckbox checked={ch1} onChange={() => setCh1(!ch1)} />
            <PCheckbox color="red" checked={ch2} onChange={() => setCh2(!ch2)}/>
            <PCheckbox color="orange" checked={ch3} onChange={() => setCh3(!ch3)}/>
            <PCheckbox color="indigo" checked={ch4} onChange={() => setCh4(!ch4)}/>
            <PCheckbox color="green" checked={ch5} onChange={() => setCh5(!ch5)}/>
        </PComponentShowcaseArea>
    );
}
export default ColorsCheckboxSection;
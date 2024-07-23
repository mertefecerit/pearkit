"use client"
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiTag from "@/app/components/src/BuiTag";
import BuiCheckbox from "@/app/components/src/BuiCheckbox";
import {useState} from "react";

function ColorsCheckboxSection() {
    const codeBlock = `<BuiCheckbox />
<BuiCheckbox color="red" />
<BuiCheckbox color="orange" />
<BuiCheckbox color="indigo" />
<BuiCheckbox color="green" />`;
    const [ch1, setCh1] = useState(true)
    const [ch2, setCh2] = useState(true)
    const [ch3, setCh3] = useState(true)
    const [ch4, setCh4] = useState(true)
    const [ch5, setCh5] = useState(true)
    return (
        <BuiComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <BuiTag label="sky"/> <BuiTag label="red"/> <BuiTag label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <BuiCheckbox checked={ch1} onChange={() => setCh1(!ch1)} />
            <BuiCheckbox color="red" checked={ch2} onChange={() => setCh2(!ch2)}/>
            <BuiCheckbox color="orange" checked={ch3} onChange={() => setCh3(!ch3)}/>
            <BuiCheckbox color="indigo" checked={ch4} onChange={() => setCh4(!ch4)}/>
            <BuiCheckbox color="green" checked={ch5} onChange={() => setCh5(!ch5)}/>
        </BuiComponentShowcaseArea>
    );
}
export default ColorsCheckboxSection;
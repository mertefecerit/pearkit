"use client";

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag, PDropdown} from "@/app/components/src";
import {useState} from "react";

function ColorsDropdownSection() {
    const [selected,setSelected] = useState({});
    const [selected2,setSelected2] = useState({});
    const [selected3,setSelected3] = useState({});
    const countries = [
        {label: 'Country 1', value: 'co1'},
        {label: 'Country 2', value: 'co2'},
        {label: 'Country 3', value: 'co3'},
        {label: 'Country 4', value: 'co4'},
        {label: 'Country 5', value: 'co5'},
    ]
    const codeBlock = `<PDropdown color="yellow"/>`
    return (
        <PComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <PTag label={"sky"}/> <PTag label={"red"}/> <PTag label={"indigo"}/> etc.</>}
            codeBlock={codeBlock}
        >
            <PDropdown
                color="yellow"
                options={countries}
                selected={selected}
                onChange={setSelected}
                placeholder="Select Country Yellow"
            />
            <PDropdown
                color="indigo"
                options={countries}
                selected={selected2}
                onChange={setSelected2}
                placeholder="Select Country Indigo"
            />
            <PDropdown
                color="cyan"
                options={countries}
                selected={selected3}
                onChange={setSelected3}
                placeholder="Select Country Cyan"
            />
        </PComponentShowcaseArea>
    );
}

export default ColorsDropdownSection;
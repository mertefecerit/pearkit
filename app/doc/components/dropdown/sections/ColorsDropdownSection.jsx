"use client";

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiCode, BuiDropdown} from "@/app/components/src";
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
    const codeBlock = `<BuiDropdown color="yellow"/>`
    return (
        <BuiComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <BuiCode>sky</BuiCode> <BuiCode>red</BuiCode> <BuiCode>indigo</BuiCode> etc.</>}
            codeBlock={codeBlock}
        >
            <BuiDropdown
                color="yellow"
                options={countries}
                selected={selected}
                onChange={setSelected}
                placeholder="Select Country Yellow"
            />
            <BuiDropdown
                color="indigo"
                options={countries}
                selected={selected2}
                onChange={setSelected2}
                placeholder="Select Country Indigo"
            />
            <BuiDropdown
                color="cyan"
                options={countries}
                selected={selected3}
                onChange={setSelected3}
                placeholder="Select Country Cyan"
            />
        </BuiComponentShowcaseArea>
    );
}

export default ColorsDropdownSection;
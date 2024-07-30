"use client";

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PDropdown} from "@/app/components/src";
import {useState} from "react";


function BasicDropdownSection() {
    const [selected,setSelected] = useState({});
    const countries = [
        {label: 'Country 1', value: 'co1'},
        {label: 'Country 2', value: 'co2'},
        {label: 'Country 3', value: 'co3'},
        {label: 'Country 4', value: 'co4'},
        {label: 'Country 5', value: 'co5'},
    ]
    const codeBlock = `const [selected,setSelected] = useState({});
const countries = [
    {label: 'Country 1', value: 'co1'},
    {label: 'Country 2', value: 'co2'},
    {label: 'Country 3', value: 'co3'},
    {label: 'Country 4', value: 'co4'},
    {label: 'Country 5', value: 'co5'}
]
<PDropdown
    options={countries}
    selected={selected}
    onChange={setSelected}
    placeholder="Select Country"
/>`
    return (
        <PComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>Customsizable dropdown component with extra features.</>}
            codeBlock={codeBlock}
        >
            <PDropdown
                options={countries}
                selected={selected}
                onChange={setSelected}
                placeholder="Select Country"
            />
        </PComponentShowcaseArea>
    );
}

export default BasicDropdownSection;
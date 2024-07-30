"use client";

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PDropdown} from "@/app/components/src";
import {useState} from "react";

function DisabledDropdownSection() {
    const [selected,setSelected] = useState({});
    const countries = [
        {label: 'Country 1', value: 'co1'},
    ]
    const codeBlock = `<PDropdown disabled={true}>`
    return (
        <PComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>Disabled feature for custom dropdown component</>}
            codeBlock={codeBlock}
        >
            <PDropdown
                disabled={true}
                options={countries}
                selected={selected}
                onChange={setSelected}
                placeholder="Select Country"
            />
        </PComponentShowcaseArea>
    );
}

export default DisabledDropdownSection;
"use client";

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiDropdown} from "@/app/components/src";
import {useState} from "react";

function DisabledDropdownSection() {
    const [selected,setSelected] = useState({});
    const countries = [
        {label: 'Country 1', value: 'co1'},
    ]
    const codeBlock = `<BuiDropdown disabled={true}>`
    return (
        <BuiComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>Disabled feature for custom dropdown component</>}
            codeBlock={codeBlock}
        >
            <BuiDropdown
                disabled={true}
                options={countries}
                selected={selected}
                onChange={setSelected}
                placeholder="Select Country"
            />
        </BuiComponentShowcaseArea>
    );
}

export default DisabledDropdownSection;
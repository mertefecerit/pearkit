"use client";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import React from "react";
import {PSearchableSelect} from "@/app/components/src";
import {PTag} from "@/app/components/src";

const DisabledSearchableSelectSection: React.FC = () => {
    const codeBlock = `<PSearchableSelect disabled />`;

    return (
        <PComponentShowcaseArea
            anchor="disabled"
            title="Disabled"
            desc={<>You can manage this situation by writing the <PTag label="disabled"/> property directly or by sending a boolean value.</>}
            codeBlock={codeBlock}
        >
            <PSearchableSelect
                disabled
                selected={{}}
                selector={"title"}
                onChange={() => false}
                placeholder={"Search & Select Product"}
                loader={() => false}
                values={[]}
            />
        </PComponentShowcaseArea>
    );
}

export default DisabledSearchableSelectSection;
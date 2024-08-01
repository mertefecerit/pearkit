import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag} from "@/app/components/src";
import React from "react";

function ImportSearchableSelectSection() {
    const codeBlock = `import { PSearchableSelect } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Searchable Select"
            desc={<>A component where you can perform both search and selection operations and customize your <PTag label={"server-side"}/> requests.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportSearchableSelectSection;
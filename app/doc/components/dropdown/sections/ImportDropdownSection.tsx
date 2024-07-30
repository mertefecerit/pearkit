import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportDropdownSection() {
    const codeBlock = `import { PDropdown } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Dropdown"
            desc={<>Dropdown is flexible form select component</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportDropdownSection;
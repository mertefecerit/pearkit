import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportBadgeSection() {
    const codeBlock = `import { PBadge } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Badge"
            desc={<>Badge is a small status indicator for another element.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportBadgeSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportBadgeSection() {
    const codeBlock = `import { BuiBadge } from 'pearkit';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Badge"
            desc={<>Badge is a small status indicator for another element.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportBadgeSection;
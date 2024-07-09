import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";

function ImportBadgeSection(props) {
    const codeBlock = `import { BuiBadge } from 'bubble-ui/BuiBadge';`
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
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportTagSection() {
    const codeBlock = `import { BuiTag } from '@mertefecerit/bubbleui';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Code"
            desc={<>Standard tag component for categorize content</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportTagSection;
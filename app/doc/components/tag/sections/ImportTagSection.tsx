import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportTagSection() {
    const codeBlock = `import { BuiTag } from 'pearkit';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Tag"
            desc={<>Standard tag component for categorize content</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportTagSection;
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportTagSection() {
    const codeBlock = `import { PTag } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Tag"
            desc={<>Standard tag component for categorize content</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportTagSection;
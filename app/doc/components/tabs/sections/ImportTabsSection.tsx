import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportTabsSection() {
    const codeBlock = `import { PTabs, PTab } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Tabs"
            desc={<></>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportTabsSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportTabsSection() {
    const codeBlock = `import { BuiTabs, BuiTab } from '@mertefecerit/bubbleui';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Tabs"
            desc={<></>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportTabsSection;
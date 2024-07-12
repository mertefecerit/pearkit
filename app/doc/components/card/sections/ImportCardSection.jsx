import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportCardSection() {
    const codeBlock = `import { BuiCard } from '@mertefecerit/bubbleui';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Card"
            desc={<>Card is a flexible container component.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportCardSection;
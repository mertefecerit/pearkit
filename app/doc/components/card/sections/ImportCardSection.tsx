import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportCardSection() {
    const codeBlock = `import { PCard } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Card"
            desc={<>Card is a flexible container component.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportCardSection;
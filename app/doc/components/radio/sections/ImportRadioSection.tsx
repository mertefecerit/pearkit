import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportRadioSection() {
    const codeBlock = `import { PRadio } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Radio"
            desc={<>A simple radio button but a little better in terms of design.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportRadioSection;
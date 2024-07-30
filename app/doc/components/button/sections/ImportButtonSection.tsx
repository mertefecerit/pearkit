import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportButtonSection() {
    const codeBlock = `import { PButton } from 'pearkit';`;

    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Button"
            desc={<>Button is an extension to standard input element with icons and theming.</>}
            codeBlock={codeBlock}
        ></PComponentShowcaseArea>
    )
}

export default ImportButtonSection;
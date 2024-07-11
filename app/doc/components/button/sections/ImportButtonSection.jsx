import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportButtonSection(props) {
    const codeBlock = `import { BuiButton } from '@mertefecerit/bubbleui';`;

    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Button"
            desc={<>Button is an extension to standard input element with icons and theming.</>}
            codeBlock={codeBlock}
        ></BuiComponentShowcaseArea>
    )
}

export default ImportButtonSection;
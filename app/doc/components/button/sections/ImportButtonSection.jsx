"use client"
import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";

function ImportButtonSection(props) {
    const codeBlock = `import { BuiButton } from 'bubble-ui/BuiButton';`;

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
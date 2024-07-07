"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import BuiCode from "@/app/components/BuiCode";

function ImportButtonSection(props) {
    const codeBlock = `import { Button } from 'bubbleui/button';`;

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
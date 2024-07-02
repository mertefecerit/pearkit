"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import BuiCode from "@/app/components/BuiCode";

function ButtonSizesSection(props) {
    const codeBlock = `<BuiButton size="xs">Text Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            title="Sizes"
            desc={<>For larger or smaller buttons, use the <BuiCode>size</BuiCode> prop. Sizes: <BuiCode>xs</BuiCode> <BuiCode>sm</BuiCode> <BuiCode>base</BuiCode> <BuiCode>lg</BuiCode> <BuiCode>xl</BuiCode>, default size is <BuiCode>base</BuiCode></>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 flex-wrap justify-center">
                    <BuiButton variant="text" size="xs">Text Button</BuiButton>
                    <BuiButton size="xs">Basic Button</BuiButton>
                    <BuiButton variant="outlined" size="xs">Outlined Button</BuiButton>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                    <BuiButton variant="text" size="sm">Text Button</BuiButton>
                    <BuiButton size="sm">Basic Button</BuiButton>
                    <BuiButton variant="outlined" size="sm">Outlined Button</BuiButton>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                    <BuiButton variant="text">Text Button</BuiButton>
                    <BuiButton>Basic Button</BuiButton>
                    <BuiButton variant="outlined">Outlined Button</BuiButton>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                    <BuiButton variant="text" size="lg">Text Button</BuiButton>
                    <BuiButton size="lg">Basic Button</BuiButton>
                    <BuiButton variant="outlined" size="lg">Outlined Button</BuiButton>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                    <BuiButton variant="text" size="xl">Text Button</BuiButton>
                    <BuiButton size="xl">Basic Button</BuiButton>
                    <BuiButton variant="outlined" size="xl">Outlined Button</BuiButton>
                </div>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default ButtonSizesSection;
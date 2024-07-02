"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";

function OutlinedButtonSection(props) {
    const outlinedButtonCodeBlock = `<BuiButton variant="outlined">Outlined Button</BuiButton>
<BuiButton variant="outlined" disabled={true}>Disabled Outlined Button</BuiButton>
<BuiButton variant="outlined" isLoading={true}>Loading Outlined Button</BuiButton>
<BuiButton variant="outlined" href="https://google.com">Link Outlined Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            title="Outlined Buttons"
            desc={<>Outlined buttons are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app. Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.</>}
            codeBlock={outlinedButtonCodeBlock}
        >
            <BuiButton variant="outlined">Outlined Button</BuiButton>
            <BuiButton variant="outlined" disabled={true}>Disabled Outlined Button</BuiButton>
            <BuiButton variant="outlined" isLoading={true}>Loading Outlined Button</BuiButton>
            <BuiButton variant="outlined" href="https://google.com">Link Outlined Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default OutlinedButtonSection;
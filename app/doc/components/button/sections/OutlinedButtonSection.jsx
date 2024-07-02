"use client"
import BComponentShowcaseArea from "@/app/components/BComponentShowcaseArea";
import BButton from "@/app/components/BButton";

function OutlinedButtonSection(props) {
    const outlinedButtonCodeBlock = `<BButton variant="outlined">Outlined Button</BButton>
<BButton variant="outlined" disabled={true}>Disabled Outlined Button</BButton>
<BButton variant="outlined" isLoading={true}>Loading Outlined Button</BButton>
<BButton variant="outlined" href="https://google.com">Link Outlined Button</BButton>`;

    return (
        <BComponentShowcaseArea
            title="Outlined Buttons"
            desc={<>Outlined buttons are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app. Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.</>}
            codeBlock={outlinedButtonCodeBlock}
        >
            <BButton variant="outlined">Outlined Button</BButton>
            <BButton variant="outlined" disabled={true}>Disabled Outlined Button</BButton>
            <BButton variant="outlined" isLoading={true}>Loading Outlined Button</BButton>
            <BButton variant="outlined" href="https://google.com">Link Outlined Button</BButton>
        </BComponentShowcaseArea>
    )
}

export default OutlinedButtonSection;
"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";

function BasicButtonSection(props) {
    const basicButtonCodeBlock = `<BuiButton>Basic Button</BuiButton>
<BuiButton disabled={true}>Disabled Basic Button</BuiButton>
<BuiButton isLoading={true}>Loading Basic Button</BuiButton>
<BuiButton href="https://google.com">Link Basic Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            title="Basic Buttons"
            desc={<>Basic buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.</>}
            codeBlock={basicButtonCodeBlock}
        >
            <BuiButton>Basic Button</BuiButton>
            <BuiButton disabled={true}>Disabled Basic Button</BuiButton>
            <BuiButton isLoading={true}>Loading Basic Button</BuiButton>
            <BuiButton href="https://google.com">Link Basic Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default BasicButtonSection;
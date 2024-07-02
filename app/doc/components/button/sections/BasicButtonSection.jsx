"use client"
import BComponentShowcaseArea from "@/app/components/BComponentShowcaseArea";
import BButton from "@/app/components/BButton";

function ButtonSection(props) {
    const basicButtonCodeBlock = `<BButton>Basic Button</BButton>
<BButton disabled={true}>Disabled Basic Button</BButton>
<BButton isLoading={true}>Loading Basic Button</BButton>
<BButton href="https://google.com">Link Basic Button</BButton>`;

    return (
        <BComponentShowcaseArea
            title="Basic Buttons"
            desc={<>Basic buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.</>}
            codeBlock={basicButtonCodeBlock}
        >
            <BButton>Basic Button</BButton>
            <BButton disabled={true}>Disabled Basic Button</BButton>
            <BButton isLoading={true}>Loading Basic Button</BButton>
            <BButton href="https://google.com">Link Basic Button</BButton>
        </BComponentShowcaseArea>
    )
}

export default ButtonSection;
"use client"
import BComponentShowcaseArea from "@/app/components/BComponentShowcaseArea";
import BButton from "@/app/components/BButton";

function TextButtonSection(props) {
    const textButtonCodeBlock = `<BButton variant="text">Text Button</BButton>
<BButton variant="text" disabled={true}>Disabled Text Button</BButton>
<BButton variant="text" isLoading={true}>Loading Text Button</BButton>
<BButton variant="text" href="https://google.com">Link Text Button</BButton>`;

    return (
        <BComponentShowcaseArea
            title="Text Buttons"
            desc={<>Text buttons are typically used for less-pronounced actions, including those located: in
                dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.</>}
            codeBlock={textButtonCodeBlock}
        >
            <BButton variant="text">Text Button</BButton>
            <BButton variant="text" disabled={true}>Disabled Text Button</BButton>
            <BButton variant="text" isLoading={true}>Loading Text Button</BButton>
            <BButton variant="text" href="https://google.com">Link Text Button</BButton>
        </BComponentShowcaseArea>
    )
}

export default TextButtonSection;
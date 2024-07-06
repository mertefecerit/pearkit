"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";

function TextButtonSection(props) {
    const textButtonCodeBlock = `<BuiButton variant="text">Text Button</BuiButton>
<BuiButton variant="text" disabled={true}>Disabled Text Button</BuiButton>
<BuiButton variant="text" isLoading={true}>Loading Text Button</BuiButton>
<BuiButton variant="text" href="https://google.com">Link Text Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            anchor="text-button"
            title="Text Buttons"
            desc={<>Text buttons are typically used for less-pronounced actions, including those located: in
                dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.</>}
            codeBlock={textButtonCodeBlock}
        >
            <BuiButton variant="text">Text Button</BuiButton>
            <BuiButton variant="text" disabled={true}>Disabled Text Button</BuiButton>
            <BuiButton variant="text" isLoading={true}>Loading Text Button</BuiButton>
            <BuiButton variant="text" href="https://google.com">Link Text Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default TextButtonSection;
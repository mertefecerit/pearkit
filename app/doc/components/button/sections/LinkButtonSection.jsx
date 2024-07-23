import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/src/BuiButton";
import BuiTag from "@/app/components/src/BuiTag";

function LinkButtonSection(props) {
    const codeBlock = `<BuiButton href="https://www.google.com">Google</BuiButton>
<BuiButton href="https://www.google.com" variant="outlined">Google</BuiButton>
<BuiButton href="https://www.google.com" variant="text">Google</BuiButton>
`;

    return (
        <BuiComponentShowcaseArea
            anchor="link"
            title="Link"
            desc={<>If you want to use it as a button link, just pass the <BuiTag label="href"></BuiTag> value as the prop. Also, the target property is <BuiTag label="_target"></BuiTag> by default, this value can also be sent as a prop.</>}
            codeBlock={codeBlock}
        >
            <BuiButton href="https://www.google.com">Google</BuiButton>
            <BuiButton href="https://www.google.com" variant="outlined">Google</BuiButton>
            <BuiButton href="https://www.google.com" variant="text">Google</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default LinkButtonSection;
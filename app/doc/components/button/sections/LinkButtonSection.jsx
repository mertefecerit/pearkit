import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import BuiCode from "@/app/components/BuiCode";

function LinkButtonSection(props) {
    const codeBlock = `<BuiButton href="https://www.google.com">Google</BuiButton>
<BuiButton href="https://www.google.com" variant="outlined">Google</BuiButton>
<BuiButton href="https://www.google.com" variant="text">Google</BuiButton>
`;

    return (
        <BuiComponentShowcaseArea
            anchor="link"
            title="Link"
            desc={<>If you want to use it as a button link, just pass the <BuiCode>href</BuiCode> value as the prop. Also, the target property is <BuiCode>_target</BuiCode> by default, this value can also be sent as a prop.</>}
            codeBlock={codeBlock}
        >
            <BuiButton href="https://www.google.com">Google</BuiButton>
            <BuiButton href="https://www.google.com" variant="outlined">Google</BuiButton>
            <BuiButton href="https://www.google.com" variant="text">Google</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default LinkButtonSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/src/BuiButton";
import BuiTag from "@/app/components/src/BuiTag";

function LinkButtonSection() {
    const codeBlock = `<BuiButton href="https://www.google.com" label="Google"/>
<BuiButton href="https://www.google.com" variant="outlined" label="Google"/>
<BuiButton href="https://www.google.com" variant="text" label="Google"/>
`;

    return (
        <BuiComponentShowcaseArea
            anchor="link"
            title="Link"
            desc={<>If you want to use it as a button link, just pass the <BuiTag label="href"></BuiTag> value as the prop. Also, the target property is <BuiTag label="_target"></BuiTag> by default, this value can also be sent as a prop.</>}
            codeBlock={codeBlock}
        >
            <BuiButton href="https://www.google.com" label="Google"/>
            <BuiButton href="https://www.google.com" variant="outlined" label={"Google"}/>
            <BuiButton href="https://www.google.com" variant="text" label={"Google"}/>
        </BuiComponentShowcaseArea>
    )
}

export default LinkButtonSection;
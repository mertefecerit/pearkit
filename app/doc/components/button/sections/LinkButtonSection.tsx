import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PButton from "@/app/components/src/PButton";
import PTag from "@/app/components/src/PTag";

function LinkButtonSection() {
    const codeBlock = `<PButton href="https://www.google.com" label="Google"/>
<PButton href="https://www.google.com" variant="outlined" label="Google"/>
<PButton href="https://www.google.com" variant="text" label="Google"/>
`;

    return (
        <PComponentShowcaseArea
            anchor="link"
            title="Link"
            desc={<>If you want to use it as a button link, just pass the <PTag label="href"></PTag> value as the prop. Also, the target property is <PTag label="_target"></PTag> by default, this value can also be sent as a prop.</>}
            codeBlock={codeBlock}
        >
            <PButton href="https://www.google.com" label="Google"/>
            <PButton href="https://www.google.com" variant="outlined" label={"Google"}/>
            <PButton href="https://www.google.com" variant="text" label={"Google"}/>
        </PComponentShowcaseArea>
    )
}

export default LinkButtonSection;
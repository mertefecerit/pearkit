import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";

function RoundedButtonSection() {
    const codeBlock = `<BuiButton rounded>Button</BuiButton>
<BuiButton rounded variant="outlined">Button</BuiButton>
<BuiButton rounded variant="text">Button</BuiButton>
`;

    return (
        <BuiComponentShowcaseArea
            anchor="rounded"
            title="Rounded"
            desc={<>Rounded buttons have a circular border radius.</>}
            codeBlock={codeBlock}
        >
            <BuiButton rounded>Button</BuiButton>
            <BuiButton rounded variant="outlined">Button</BuiButton>
            <BuiButton rounded variant="text">Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default RoundedButtonSection;
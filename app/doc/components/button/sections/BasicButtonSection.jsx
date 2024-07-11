import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/src/BuiButton";

function BasicButtonSection(props) {
    const codeBlock = `<BuiButton>Button</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            anchor="basic"
            title="Basic"
            desc={<>The text or content to be displayed on the button can be defined by writing it directly into it.</>}
            codeBlock={codeBlock}
        >
            <BuiButton>Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default BasicButtonSection;
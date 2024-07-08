"use client"
import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";

function RaisedButtonSection(props) {
    const codeBlock = `<BuiButton raised>Button</BuiButton>
<BuiButton raised variant="outlined">Button</BuiButton>
<BuiButton raised variant="text">Button</BuiButton>
`;

    return (
        <BuiComponentShowcaseArea
            anchor="raised"
            title="Raised"
            desc={<>Raised buttons display a shadow to indicate elevation.</>}
            codeBlock={codeBlock}
        >
            <BuiButton raised>Button</BuiButton>
            <BuiButton raised variant="outlined">Button</BuiButton>
            <BuiButton raised variant="text">Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default RaisedButtonSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButton} from "@/app/components/src";

function RaisedButtonSection() {
    const codeBlock = `<BuiButton raised label="Button"/>
<BuiButton raised variant="outlined" label="Button"/>
<BuiButton raised variant="text" label="Button"/>
`;

    return (
        <BuiComponentShowcaseArea
            anchor="raised"
            title="Raised"
            desc={<>Raised buttons display a shadow to indicate elevation.</>}
            codeBlock={codeBlock}
        >
            <BuiButton raised label={"Button"}/>
            <BuiButton raised variant="outlined" label={"Button"}/>
            <BuiButton raised variant="text" label={"Button"}/>
        </BuiComponentShowcaseArea>
    )
}

export default RaisedButtonSection;
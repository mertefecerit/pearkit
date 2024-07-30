import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton} from "@/app/components/src";

function RaisedButtonSection() {
    const codeBlock = `<PButton raised label="Button"/>
<PButton raised variant="outlined" label="Button"/>
<PButton raised variant="text" label="Button"/>
`;

    return (
        <PComponentShowcaseArea
            anchor="raised"
            title="Raised"
            desc={<>Raised buttons display a shadow to indicate elevation.</>}
            codeBlock={codeBlock}
        >
            <PButton raised label={"Button"}/>
            <PButton raised variant="outlined" label={"Button"}/>
            <PButton raised variant="text" label={"Button"}/>
        </PComponentShowcaseArea>
    )
}

export default RaisedButtonSection;
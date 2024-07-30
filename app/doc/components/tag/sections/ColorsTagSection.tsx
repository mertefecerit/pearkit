import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag} from "@/app/components/src";

function ColorsTagSection() {
    const codeBlock = `<PTag color="orange" />`
    return (
        <PComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <PTag color="sky" label="sky"/> <PTag color="red" label="red"/> <PTag color="indigo" label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <PTag color="gray" label="New" />
            <PTag color="orange" label="New" />
            <PTag color="cyan" label="New" />
        </PComponentShowcaseArea>
    );
}

export default ColorsTagSection;
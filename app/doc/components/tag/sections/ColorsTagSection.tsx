import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTag} from "@/app/components/src";

function ColorsTagSection() {
    const codeBlock = `<BuiTag color="orange" />`
    return (
        <BuiComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <BuiTag color="sky" label="sky"/> <BuiTag color="red" label="red"/> <BuiTag color="indigo" label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <BuiTag color="gray" label="New" />
            <BuiTag color="orange" label="New" />
            <BuiTag color="cyan" label="New" />
        </BuiComponentShowcaseArea>
    );
}

export default ColorsTagSection;
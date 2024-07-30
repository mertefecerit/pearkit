import {PBadge, PTag} from "@/app/components/src";
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ColorsBadgeSection(){
    const codeBlock = `<PBadge color="red" value={2}/>
<PBadge color="indigo" value={7}/>
<PBadge color="yellow" value={12}/>
<PBadge color="sky" value={148}/>
<PBadge color="blue" value={34}/>`;

    return (
        <PComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <PTag color={"sky"} label="sky"/> <PTag color={"red"} label="red"/> <PTag color={"indigo"} label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <PBadge color="red" value={2}/>
            <PBadge color="indigo" value={7}/>
            <PBadge color="yellow" value={12}/>
            <PBadge color="sky" value={148}/>
            <PBadge color="blue" value={34}/>
        </PComponentShowcaseArea>
    )
}

export default ColorsBadgeSection
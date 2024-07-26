import {BuiBadge, BuiTag} from "@/app/components/src";
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ColorsBadgeSection(){
    const codeBlock = `<BuiBadge color="red" value={2}/>
<BuiBadge color="indigo" value={7}/>
<BuiBadge color="yellow" value={12}/>
<BuiBadge color="sky" value={148}/>
<BuiBadge color="blue" value={34}/>`;

    return (
        <BuiComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <BuiTag color={"sky"} label="sky"/> <BuiTag color={"red"} label="red"/> <BuiTag color={"indigo"} label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <BuiBadge color="red" value={2}/>
            <BuiBadge color="indigo" value={7}/>
            <BuiBadge color="yellow" value={12}/>
            <BuiBadge color="sky" value={148}/>
            <BuiBadge color="blue" value={34}/>
        </BuiComponentShowcaseArea>
    )
}

export default ColorsBadgeSection
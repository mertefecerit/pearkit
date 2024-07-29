import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTab, BuiTabs, BuiTag} from "@/app/components/src";

function ColorsTabsSection() {
    const codeBlock = `<BuiTabs color="orange">
    //other tab components
</BuiTabs>`
    return (
        <BuiComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <BuiTag color="sky" label="sky"/> <BuiTag color="red" label="red"/> <BuiTag color="indigo" label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <BuiTabs color="orange">
                {
                    Array.from({length:5},(_, index) => index + 1).map((i) => (<BuiTab key={i} label={'Tab ' + i}>
                        <p>{'Tab ' + i} = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                    </BuiTab>))
                }
            </BuiTabs>
        </BuiComponentShowcaseArea>
    );
}

export default ColorsTabsSection;
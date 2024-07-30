import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTab, PTabs, PTag} from "@/app/components/src";

function ColorsTabsSection() {
    const codeBlock = `<PTabs color="orange">
    //other tab components
</PTabs>`
    return (
        <PComponentShowcaseArea
            anchor="colors"
            title="Colors"
            desc={<>Since we use the tailwind color palette in our design, you can use the names of all tailwind colors
                as props. For example : <PTag color="sky" label="sky"/> <PTag color="red" label="red"/> <PTag color="indigo" label="indigo"/></>}
            codeBlock={codeBlock}
        >
            <PTabs color="orange">
                {
                    Array.from({length:5},(_, index) => index + 1).map((i) => (<PTab key={i} label={'Tab ' + i}>
                        <p>{'Tab ' + i} = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, expedita.</p>
                    </PTab>))
                }
            </PTabs>
        </PComponentShowcaseArea>
    );
}

export default ColorsTabsSection;
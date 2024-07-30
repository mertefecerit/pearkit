import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton, PCard, PTag} from "@/app/components/src";
import {Icon} from "@iconify/react";
import React from "react";

const ButtonComponents:React.FC = () => {
    return (
        <div className="flex gap-2 p-4">
            <PButton startIcon={<Icon icon="mdi:check"/>} label="Save"/>
            <PButton variant="text" color="gray" startIcon={<Icon icon="mdi:times"/>} label="Cancel"/>
        </div>
    )
}
const HeaderAreaComponent:React.FC = () => {
    return (
        <div className="overflow-hidden">
            <img width={500} height={300} src={"https://placehold.co/500x300"} alt="placeholder-image"/>
        </div>
    )
}
function AdvancedCardSection() {
    const codeBlock = `<PCard
    header={<HeaderAreaComponent/>}
    title="Advanced Card"
    subTitle="This is subtitle"
    footer={<ButtonComponents/>}
>
    <div className="p-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, reprehenderit.</p>
    </div>
</PCard>`
    return (
        <PComponentShowcaseArea
            anchor="advanced"
            title="Advanced"
            desc={<>Card content can be customized further with <PTag label="subTitle"/>, <PTag label="header"/> and <PTag label="footer"/> properties.</>}
            codeBlock={codeBlock}
        >
            <PCard
                header={<HeaderAreaComponent/>}
                title="Advanced Card"
                subTitle="This is subtitle"
                footer={<ButtonComponents/>}
            >
                <div className="p-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, reprehenderit.</p>
                </div>
            </PCard>
        </PComponentShowcaseArea>
    );
}

export default AdvancedCardSection;
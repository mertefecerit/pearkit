import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButton, BuiCard, BuiCode} from "@/app/components/src";
import {Icon} from "@iconify/react";
import Image from "next/image";

const ButtonComponents = () => {
    return (
        <div className="flex gap-2 p-4">
            <BuiButton startIcon={<Icon icon="mdi:check"/>}>Save</BuiButton>
            <BuiButton color="gray" startIcon={<Icon icon="mdi:times"/>}>Cancel</BuiButton>
        </div>
    )
}
const HeaderAreaComponent = () => {
    return (
        <div className="overflow-hidden">
            <img width={500} height={300} src={"https://placehold.co/500x300"} alt="placeholder-image"/>
        </div>
    )
}
function AdvancedCardSection() {
    const codeBlock = `<BuiCard
    header={<HeaderAreaComponent/>}
    title="Advanced Card"
    subTitle="This is subtitle"
    footer={<ButtonComponents/>}
>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, reprehenderit.</p>
</BuiCard>`
    return (
        <BuiComponentShowcaseArea
            anchor="advanced"
            title="Advanced"
            desc={<>Card content can be customized further with <BuiCode>subTitle</BuiCode>, <BuiCode>header</BuiCode> and <BuiCode>footer</BuiCode> properties.</>}
            codeBlock={codeBlock}
        >
            <BuiCard
                header={<HeaderAreaComponent/>}
                title="Advanced Card"
                subTitle="This is subtitle"
                footer={<ButtonComponents/>}
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, reprehenderit.</p>
            </BuiCard>
        </BuiComponentShowcaseArea>
    );
}

export default AdvancedCardSection;
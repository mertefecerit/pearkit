import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

function ApiSwitchSection() {
    const content = [
        {
            name: 'color',
            type: 'TwColor',
            default: 'blue',
            description: 'Color of switch component.',
        },
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the switch component.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiSwitchSection;
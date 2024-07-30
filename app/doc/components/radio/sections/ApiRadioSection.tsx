import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

function ApiRadioSection() {
    const content = [
        {
            name: 'label',
            type: 'string',
            default:'null',
            description: 'Label of the component'
        },
        {
            name: 'colors',
            type: 'TwColor',
            default:'blue',
            description: 'Colors of the component'
        },
        {
            name: 'isInvalid',
            type: 'boolean | true | false',
            default:'blue',
            description: 'Invalid state of the component'
        },
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the radio component.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiRadioSection;
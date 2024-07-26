import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

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
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the radio component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiRadioSection;
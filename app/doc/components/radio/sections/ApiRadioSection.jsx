import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiRadioSection() {
    const content = [
        {
            name: 'label',
            type: 'string',
            default:'null',
            description: 'It is the label of the radio component.'
        },
        {
            name: 'color',
            type: 'string',
            default:'blue',
            description: 'With this prop you can use all the names in the tailwindcss default color palette.'
        },
        {
            name: 'disabled',
            type: 'boolean',
            default:'false',
            description: 'It enables the radio component to be disabled.'
        },
        {
            name: 'isInvalid',
            type: 'boolean',
            default:'false',
            description: 'It is used for client side validation of the radio component.'
        },
        {
            name: 'onChange',
            type: 'function',
            default:'null',
            description: 'It is a function that is triggered when the value of the radio component changes.'
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
import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/components/project/BuiApiDescriptionTable";

function ApiCheckboxSection() {
    const content = [
        {
            name: 'label',
            type: 'string',
            default:'null',
            description: 'It is the label of the checkbox component.'
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
            description: 'It enables the checkbox component to be disabled.'
        },
        {
            name: 'invalid',
            type: 'boolean',
            default:'false',
            description: 'It is used for client side validation of the checkbox component.'
        },
        {
            name: 'onChange',
            type: 'function',
            default:'null',
            description: 'It is a function that is triggered when the value of the checkbox component changes.'
        },
        {
            name: 'ariaLabel',
            type: 'string',
            default:'null',
            description: 'It allows the aria-label property of the checkbox component to be changed. If this value is not given, the value in the label prop is valid.'
        },
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the checkbox component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiCheckboxSection;
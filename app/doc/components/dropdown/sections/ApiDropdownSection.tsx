import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

function ApiDropdownSection() {
    const content = [
        {
            name: 'options',
            type: 'array',
            default:'null',
            description: 'Options of the dropdown component'
        },
        {
            name: 'selector',
            type: 'string',
            default:'label',
            description: 'Selector of array object list'
        },
        {
            name: 'onChange',
            type: 'function',
            default:'null',
            description: 'OnChange callback function for setting data'
        },
        {
            name: 'selected',
            type: 'object',
            default:'{}',
            description: 'Controlled by parent state prop'
        },
        {
            name: 'placeholder',
            type: 'string',
            default:'Select Item',
            description: 'Placeholder of the dropdown component'
        },
        {
            name: 'itemComponent',
            type: 'elementType',
            default:'null',
            description: 'For customsizable dropdown item component'
        },
        {
            name: 'color',
            type: 'string',
            default: 'blue',
            description: 'With this prop you can use all the names in the tailwindcss default color palette.'
        }
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the dropdown component.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiDropdownSection;
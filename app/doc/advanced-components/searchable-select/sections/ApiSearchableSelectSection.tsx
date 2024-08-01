import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

function ApiSearchableSelectSection() {
    const content = [
        {
            name: 'selected',
            type: 'object',
            default:'{}',
            description: 'Selected object item of the component'
        },
        {
            name: 'placeholder',
            type: 'string',
            default:'Search & Select Record',
            description: 'Placeholder of the component'
        },
        {
            name: 'selector',
            type: 'string',
            default:'null',
            description: 'It is used as a selective index in the data stack.'
        },
        {
            name: 'onChange',
            type: 'function',
            default:'void',
            description: 'Trigger when select item'
        },
        {
            name: 'loader',
            type: 'function',
            default:'void',
            description: 'Trigger when is status or search status changed'
        },
        {
            name: 'color',
            type: 'TwColor | All tailwind color names',
            default:'lime',
            description: 'Color of the component'
        },
        {
            name: 'values',
            type: 'Object[]',
            default:'[]',
            description: 'The chunk of data that must be sent after the request.'
        },
        {
            name: 'itemComponent',
            type: 'React.ReactNode',
            default:'null',
            description: 'Customizable item and selected area component'
        },
        {
            name: 'focusOpen',
            type: 'boolean | true | false',
            default:'false',
            description: 'Trigger open component on focus status'
        },
        {
            name: 'isPending',
            type: 'boolean | true | false',
            default: 'false',
            description: 'Loading status of the component content area'
        },
        {
            name: 'disabled',
            type: 'boolean | true | false',
            default: 'false',
            description: 'Control status of the component'
        },
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the alert component.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiSearchableSelectSection;
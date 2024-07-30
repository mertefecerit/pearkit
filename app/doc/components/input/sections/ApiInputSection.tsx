import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

function ApiInputSection() {
    const content = [
        {
            name: 'icon',
            type: 'ReactNode',
            default:'null',
            description: 'Icon of the component.'
        },
        {
            name: 'isLoading',
            type: 'boolean',
            default:'false',
            description: 'Loading state of the component.'
        },
        {
            name: 'color',
            type: 'TwColor | Tailwind Color Names Union',
            default:'blue',
            description: 'Colors of the component.'
        },
        {
            name: 'size',
            type: 'string | sm | base | lg',
            default: 'base',
            description: 'Sizes of the component.'
        },
        {
            name: 'variant',
            type: 'string | outlined | underline | filled',
            default:'outlined',
            description: 'Variant of the component.'
        },
        {
            name: 'label',
            type: 'string',
            default:'null',
            description: 'Label of the component.'
        },
        {
            name: 'isInvalid',
            type: 'boolean',
            default:'false',
            description: 'Invalid state of the component.'
        },
        {
            name: 'errors',
            type: 'string[]',
            default:'[]',
            description: 'Errors of the component.'
        },
        {
            name: 'description',
            type: 'string',
            default: 'null',
            description: 'Description of the component.'
        },
        {
            name: 'rounded',
            type: 'boolean',
            default:'false',
            description: 'Fully rounded design of the component.'
        },
        {
            name: 'passwordReveal',
            type: 'boolean',
            default: 'false',
            description: 'Change type prop of the component.'
        },
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the input component. You can also send all HTML input properties.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiInputSection;
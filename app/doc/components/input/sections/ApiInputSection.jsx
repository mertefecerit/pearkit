import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiInputSection() {
    const content = [
        {
            name: 'label',
            type: 'string',
            default:'null',
            description: 'Label of input component.'
        },
        {
            name: 'isLoading',
            type: 'boolean',
            default:'false',
            description: 'Input component loading status.'
        },
        {
            name: 'type',
            type: 'string',
            default: 'text',
            description: 'Type of input component.'
        },
        {
            name: 'color',
            type: 'string',
            default:'blue',
            description: 'Colors of input component all tailwindcss color names supported.'
        },
        {
            name: 'size',
            type: 'string',
            default:'base',
            description: 'There are 3 type of size named by sm,base and lg.'
        },
        {
            name: 'variant',
            type: 'string',
            default:'outlined',
            description: 'There are 3 type of variant named by outlined, underlined and filled.'
        },
        {
            name: 'icon',
            type: 'elementType',
            default:'null',
            description: 'For icon component'
        },
        {
            name: 'isInvalid',
            type: 'boolean',
            default:'false',
            description: 'Invalid state of input component'
        },
        {
            name: 'errors',
            type: 'array',
            default:'[]',
            description: 'It is used to send error array.'
        },
        {
            name: 'description',
            type: 'string',
            default:'null',
            description: 'It is used to description of input component.'
        },
        {
            name: 'rounded',
            type: 'boolean',
            default:'false',
            description: 'It is used to full rounded edge of input component.'
        },
        {
            name: 'passwordReveal',
            type: 'boolean',
            default:'true',
            description: 'This feature is used to "activate" or "deactivate" the button that "shows" or "hide" your password.'
        },
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the input component. You can also send all HTML input properties.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiInputSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiButtonSection(props) {
    const content = [
        {
            name: 'type',
            type: 'string',
            default:'button',
            description: 'Specifies the button type.'
        },
        {
            name: 'variant',
            type: 'string',
            default: 'basic',
            description: 'It can also take outlined and text.'
        },
        {
            name: 'color',
            type: 'string',
            default: 'blue',
            description: 'You can pass all tailwind css color palette colors as names.'
        },
        {
            name: 'size',
            type: 'string',
            default: 'base',
            description: 'It can also take xs, sm, lg and xl values.'
        },
        {
            name: 'isLoading',
            type: 'boolean',
            default: 'false',
            description: 'Required to check the loading status.'
        },
        {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'It is for the disable feature of the button.'
        },
        {
            name: 'children',
            type: 'node',
            default: 'null',
            description: 'You can give components as children.'
        },
        {
            name: 'startIcon',
            type: 'elementType',
            default: 'null',
            description: 'It can be placed before the child and given as a component.'
        },
        {
            name: 'endIcon',
            type: 'elementType',
            default: 'null',
            description: 'It is placed after child and can be given as a component.'
        },
        {
            name: 'href',
            type: 'string',
            default: 'null',
            description: 'Turns the button into a element.'
        },
        {
            name: 'target',
            type: 'string',
            default: '_target',
            description: 'It changes the target property of the button whose button has been converted to a element.'
        },
        {
            name: 'onClick',
            type: 'function',
            default: 'null',
            description: 'Runs a function for the click event.'
        },
        {
            name: 'animation',
            type: 'boolean',
            default: 'true',
            description: 'It activates the click animation and takes true and false values.'
        },
        {
            name: 'raised',
            type: 'boolean',
            default: 'false',
            description: 'By adding a shadow to the button, it makes it appear above and takes true and false values.'
        },
        {
            name: 'rounded',
            type: 'boolean',
            default: 'false',
            description: 'Shows the button with rounded edges and takes the values true and false.'
        },
        {
            name: 'ariaLabel',
            type: 'string',
            default: 'button',
            description: 'It allows the value of the button label accessibility option to be changed.'
        },
        {
            name: 'classes',
            type: 'string',
            default: 'null',
            description: 'It is a prop for additional css classes.'
        }
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the button.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiButtonSection;
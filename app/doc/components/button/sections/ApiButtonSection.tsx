import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiButtonSection() {
    const content = [
        {
            name: 'variant',
            type: "string | basic | outlined | text",
            default: 'basic',
            description: 'Variants of the button component.'
        },
        {
            name: 'color',
            type: "string | Tailwind Color Names",
            default: 'blue',
            description: 'Colors of the button component.'
        },
        {
            name: 'size',
            type: "string | xs | sm | base | lg | xl",
            default: 'base',
            description: 'Sizes of the button component.'
        },
        {
            name: 'isLoading',
            type: "boolean | true | false",
            default: 'false',
            description: 'The button component is used for loading status control.'
        },
        {
            name: 'label',
            type: "string",
            default: 'Empty',
            description: 'Label of the button component.'
        },
        {
            name: 'startIcon',
            type: "ReactNode",
            default: 'null',
            description: 'To put an icon at the beginning of a button component.'
        },
        {
            name: 'endIcon',
            type: "ReactNode",
            default: 'null',
            description: 'To put an icon at the end of the button component.'
        },
        {
            name: 'animation',
            type: "boolean | true | false",
            default: 'true',
            description: 'Button component is used for animation state control.'
        },
        {
            name: 'raised',
            type: "boolean | true | false",
            default: 'true',
            description: 'Control of the change the button raised design.'
        },
        {
            name: 'rounded',
            type: "boolean | true | false",
            default: 'true',
            description: 'Control of the change the button rounded design.'
        },
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
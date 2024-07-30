import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

function ApiButtonSection() {
    const content = [
        {
            name: 'variant',
            type: "string | basic | outlined | text",
            default: 'basic',
            description: 'Variants of the component.'
        },
        {
            name: 'color',
            type: "string | Tailwind Color Names",
            default: 'blue',
            description: 'Colors of the component.'
        },
        {
            name: 'size',
            type: "string | xs | sm | base | lg | xl",
            default: 'base',
            description: 'Sizes of the component.'
        },
        {
            name: 'isLoading',
            type: "boolean | true | false",
            default: 'false',
            description: 'The component is used for loading status control.'
        },
        {
            name: 'label',
            type: "string",
            default: 'Empty',
            description: 'Label of the component.'
        },
        {
            name: 'startIcon',
            type: "ReactNode",
            default: 'null',
            description: 'To put an icon at the beginning of a component.'
        },
        {
            name: 'endIcon',
            type: "ReactNode",
            default: 'null',
            description: 'To put an icon at the end of the component.'
        },
        {
            name: 'animation',
            type: "boolean | true | false",
            default: 'true',
            description: 'Component is used for animation state control.'
        },
        {
            name: 'raised',
            type: "boolean | true | false",
            default: 'true',
            description: 'Control of the change the component raised design.'
        },
        {
            name: 'rounded',
            type: "boolean | true | false",
            default: 'true',
            description: 'Control of the change the component rounded design.'
        },
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the button.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiButtonSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiTagSection() {
    const content = [
        {
            name: 'label',
            type: 'string',
            default:'null',
            description: 'Label of the component'
        },
        {
            name: 'color',
            type: 'TwColor',
            default:'blue',
            description: 'Colors of the component'
        },
        {
            name: 'rounded',
            type: 'boolean',
            default:'true',
            description: 'Fully rounded design of the component'
        },
        {
            name: 'icon',
            type: 'ReactNode',
            default:'null',
            description: 'Icon component of the tag component'
        },
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the tag component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiTagSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiTagSection() {
    const content = [
        {
            name: 'label',
            type: 'string',
            default:'null',
            description: 'Value of tag component'
        },
        {
            name: 'color',
            type: 'string',
            default:'blue',
            description: 'Color of switch component.(Tailwindcss color names)'
        },
        {
            name: 'rounded',
            type: 'boolean',
            default:'false',
            description: 'For fully rounded tag property'
        },
        {
            name: 'className',
            type: 'string',
            default: 'null',
            description: 'For extra css classes tag component'
        },
        {
            name: 'icon',
            type: 'elementType',
            default:'null',
            description: 'Icon component for tag component'
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
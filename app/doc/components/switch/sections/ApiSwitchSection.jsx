import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiSwitchSection() {
    const content = [
        {
            name: 'color',
            type: 'string',
            default: 'blue',
            description: 'Color of switch component.',
        },
        {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disabled property for switch component',
        },
        {
            name: 'checked',
            type: 'boolean',
            default: 'false',
            description: 'Checked property for switch component',
        },
        {
            name: 'attributes',
            type: 'null',
            default: 'null',
            description: 'All input attributes can give',
        }
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the switch component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiSwitchSection;
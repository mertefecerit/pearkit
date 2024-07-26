import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiCheckboxSection() {
    const content = [
        {
            name: 'label',
            type: 'null',
            default:'null',
            description: 'Label of the component.'
        },
        {
            name: 'color',
            type: 'string | Tailwind Color Names',
            default:'blue',
            description: 'Colors of the component.'
        },
        {
            name: 'invalid',
            type: 'boolean | true | false',
            default:'false',
            description: 'Control invalid status of the component.'
        },
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the checkbox component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiCheckboxSection;
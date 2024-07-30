import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

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
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the checkbox component.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiCheckboxSection;
import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";


function ApiBadgeSection() {
    const content = [
        {
            name: 'value',
            type: 'number',
            default:'0',
            description: 'Value of the component'
        },
        {
            name: 'size',
            type: 'string | xs | sm | base',
            default:'xs',
            description: 'Sizes of the component'
        },
        {
            name: 'color',
            type: "string | Tailwind Color Names",
            default: 'blue',
            description: 'Colors of the component.'
        },
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the badge.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiBadgeSection;
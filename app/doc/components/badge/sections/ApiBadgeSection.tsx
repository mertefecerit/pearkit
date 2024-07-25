import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";


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
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the badge.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiBadgeSection;
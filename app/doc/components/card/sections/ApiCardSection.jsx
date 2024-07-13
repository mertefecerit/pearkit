import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiCardSection() {
    const content = [
        {
            name: 'title',
            type: 'string',
            default:'null',
            description: 'Title of the card.'
        },
        {
            name: 'subTitle',
            type: 'string',
            default:'null',
            description: 'Secondary title of the card.'
        },
        {
            name: 'classes',
            type: 'string',
            default:'null',
            description: 'Extra css classes for card wrapper'
        },
        {
            name: 'header',
            type: 'elementType',
            default:'null',
            description: 'Header of the card.'
        },
        {
            name: 'footer',
            type: 'elementType',
            default:'null',
            description: 'Footer of the card.'
        },
        {
            name: 'children',
            type: 'node',
            default:'null',
            description: 'Used to get the child elements of the component.'
        },
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the card component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiCardSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiCardSection() {
    const content = [
        {
            name: 'header',
            type: 'ReactNode',
            default:'null',
            description: 'Header of the component.'
        },
        {
            name: 'footer',
            type: 'ReactNode',
            default:'null',
            description: 'Footer of the component.'
        },
        {
            name: 'title',
            type: 'string',
            default:'null',
            description: 'Title of the component.'
        },
        {
            name: 'subTitle',
            type: 'string',
            default:'null',
            description: 'SubTitle of the component.'
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
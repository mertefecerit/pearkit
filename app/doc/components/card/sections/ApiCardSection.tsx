import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

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
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the card component.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiCardSection;
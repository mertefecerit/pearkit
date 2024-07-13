import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiInputSection() {
    const content = [
        {
            name: 'title',
            type: 'string',
            default:'null',
            description: 'Title of the card.'
        },
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the input component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiInputSection;
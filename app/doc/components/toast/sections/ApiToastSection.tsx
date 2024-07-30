import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

function ApiToastSection() {
    const content = [
        {
            name: 'fire',
            type: 'function',
            default:'null',
            description: 'Trigger function of the component'
        },
        {
            name: 'PToastProvider',
            type: 'provider',
            default:'null',
            description: 'Need for toast component hook'
        },
        {
            name: 'properties',
            type: 'fire function 1nd parameter',
            default:'{type: \'info\'}',
            description: 'Fire function properties'
        },
        {
            name: 'options',
            type: 'fire function 2nd parameter',
            default:'{position:\'top-end\', timeout:3000}',
            description: 'Fire function options'
        },
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the toast component.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiToastSection;
import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiToastSection() {
    const content = [
        {
            name: 'fire',
            type: 'function',
            default:'null',
            description: 'Trigger function of the component'
        },
        {
            name: 'BuiToastProvider',
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
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the toast component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiToastSection;
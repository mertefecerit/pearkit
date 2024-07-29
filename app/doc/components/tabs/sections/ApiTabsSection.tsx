import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiTabsSection() {
    const content = [
        {
            name: 'BuiTab | label',
            type: 'string',
            default:'null',
            description: 'Label of the BuiTab component'
        },
        {
            name: 'BuiTab | disabled',
            type: 'boolean | true | false',
            default:'false',
            description: 'Disabled status of the BuiTab component'
        },
        {
            name: 'BuiTab | icon',
            type: 'ReactNode',
            default:'null',
            description: 'Icon component of the BuiTab component'
        },
        {
            name: 'BuiTabs | colors',
            type: 'TwColor | All tailwind color names',
            default:'blue',
            description: 'Colors of the BuiTabs component'
        },
        {
            name: 'BuiTabs | activeIndexTab',
            type: 'number',
            default:'0',
            description: 'Active Tab of the BuiTabs component'
        },
        {
            name: 'BuiTabs | onChange',
            type: 'function',
            default:'Tab Index Number',
            description: 'onChange method of the BuiTabs component'
        },
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the tabs and tab component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiTabsSection;
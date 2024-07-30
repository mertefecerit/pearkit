import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

function ApiTabsSection() {
    const content = [
        {
            name: 'PTab | label',
            type: 'string',
            default:'null',
            description: 'Label of the PTab component'
        },
        {
            name: 'PTab | disabled',
            type: 'boolean | true | false',
            default:'false',
            description: 'Disabled status of the PTab component'
        },
        {
            name: 'PTab | icon',
            type: 'ReactNode',
            default:'null',
            description: 'Icon component of the PTab component'
        },
        {
            name: 'PTabs | colors',
            type: 'TwColor | All tailwind color names',
            default:'blue',
            description: 'Colors of the PTabs component'
        },
        {
            name: 'PTabs | activeIndexTab',
            type: 'number',
            default:'0',
            description: 'Active Tab of the PTabs component'
        },
        {
            name: 'PTabs | onChange',
            type: 'function',
            default:'Tab Index Number',
            description: 'onChange method of the PTabs component'
        },
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the tabs and tab component.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiTabsSection;
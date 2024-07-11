export default function AsideContent() {
    return [
        {
            label: 'Getting Started',
            children: [
                {
                    path: '/doc/getting-started/installation',
                    label: 'Installation',
                    children: [
                        {path: '#download', label: 'Download'},
                        {path: '#usage', label: 'Usage'},
                    ]
                },
            ]
        },
        {
            label: 'Components',
            children: [
                {
                    path: '/doc/components/button',
                    label: 'Button',
                    children: [
                        {path: '#import', label: 'Import'},
                        {path: '#basic', label: 'Basic'},
                        {path: '#variants', label: 'Variants'},
                        {path: '#link', label: 'Link'},
                        {path: '#icon', label: 'Icon'},
                        {path: '#loading', label: 'Loading'},
                        {path: '#color', label: 'Color'},
                        {path: '#disabled', label: 'Disabled'},
                        {path: '#raised', label: 'Raised'},
                        {path: '#rounded', label: 'Rounded'},
                        {path: '#sizes', label: 'Sizes'},
                        {path: '#button-group', label: 'Button Group'},
                        {path: '#accessibility', label: 'Accessibility'},
                        {path: '#api', label: 'Api'}
                    ]
                },
                {
                    path: '/doc/components/badge',
                    label: 'Badge',
                    children: [
                        {path: '#import', label: 'Import'},
                        {path: '#basic', label: 'Basic'},
                        {path: '#colors', label: 'Colors'},
                        {path: '#sizes', label: 'Sizes'},
                        {path: '#position', label: 'Position'},
                        {path: '#accessibility', label: 'Accessibility'},
                        {path: '#api', label: 'Api'},
                    ]
                },
                {
                    path: '/doc/components/checkbox',
                    label: 'Checkbox',
                    children: [
                        {path: '#import', label: 'Import'},
                        {path: '#basic', label: 'Basic'},
                        {path: '#label', label: 'Label'},
                        {path: '#colors', label: 'Colors'},
                        {path: '#invalid', label: 'Invalid'},
                        {path: '#disabled', label: 'Disabled'},
                        {path: '#accessibility', label: 'Accessibility'},
                        {path: '#api', label: 'Api'},
                    ]
                }
            ]
        },
    ]
}
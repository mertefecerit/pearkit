export default function AsideContent() {
    return [
        {
            label: 'Getting Started',
            children: [
                {
                    path: '/doc/getting-started/overview',
                    label: 'Overview',
                },
                {
                    path: '/doc/getting-started/installation',
                    label: 'Installation',
                },
                {
                    path: '/doc/getting-started/usage',
                    label: 'Usage',
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
                        {
                            path: '#import',
                            label: 'Import'
                        },
                        {
                            path: '#basic',
                            label: 'Basic'
                        },
                        {
                            path: '#variants',
                            label: 'Variants'
                        },
                        {
                            path: '#link',
                            label: 'Link'
                        },
                        {
                            path: '#icon',
                            label: 'Icon'
                        },
                        {
                            path: '#loading',
                            label: 'Loading'
                        },
                        {
                            path: '#color',
                            label: 'Color'
                        },
                        {
                            path: '#disabled',
                            label: 'Disabled'
                        },
                        {
                            path: '#raised',
                            label: 'Raised'
                        },
                        {
                            path: '#rounded',
                            label: 'Rounded'
                        },
                        {
                            path: '#sizes',
                            label: 'Sizes'
                        },
                        {
                            path: '#button-group',
                            label: 'Button Group'
                        },
                        {
                            path: '#accessibility',
                            label: 'Accessibility'
                        },
                        {
                            path: '#api',
                            label: 'Api'
                        }
                    ]
                },
            ]
        },
    ]
}
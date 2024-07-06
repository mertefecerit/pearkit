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
                            path: '#button',
                            label: 'Button'
                        },
                        {
                            path: '#text-button',
                            label: 'Text Button'
                        },
                        {
                            path: '#basic-button',
                            label: 'Basic Button'
                        },
                        {
                            path: '#outlined-button',
                            label: 'Outlined Button'
                        },
                        {
                            path: '#handling-clicks',
                            label: 'Handling Clicks'
                        },
                        {
                            path: '#colors',
                            label: 'Colors'
                        },
                        {
                            path: '#sizes',
                            label: 'Sizes'
                        },
                        {
                            path: '#button-with-icon-and-label',
                            label: 'Button with icon and label'
                        }
                    ]
                },
                {
                    path: '/doc/components/button-group',
                    label: 'Button Group',
                    children:[
                        {
                            path: '#basic-button-group',
                            label: 'Basic Button Group'
                        },
                        {
                            path: '#button-variants',
                            label: 'Button Variants'
                        },
                    ]
                },
            ]
        },
    ]
}
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
                },
                {
                    path: '/doc/components/modal',
                    label: 'Modal',
                },
                {
                    path: '/doc/components/toggle',
                    label: 'Toggle',
                },
            ]
        },
    ]
}
export interface PNavItemPropTypes {
    label: string,
    childItems: {
        path: string;
        label: string;
        children?: {
            path: string,
            label: string;
            children?: {
                path: string,
                label: string;
            }[]
        }[]
    }[]
}
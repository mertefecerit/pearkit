export interface IBuiSearchPropTypes {
    status: boolean | true | false,
    close: () => void
}

export interface BuiSearchChild {
    path: string;
    label: string;
    children: BuiSearchChild[];
}
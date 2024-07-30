export interface IPSearchPropTypes {
    status: boolean | true | false,
    close: () => void
}

export interface PSearchChild {
    path: string;
    label: string;
    children: PSearchChild[];
}
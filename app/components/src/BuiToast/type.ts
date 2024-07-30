import {ToastPosition, ToastType} from "../providers/ToastProvider/types";

export interface IBuiToastPropTypes {
    toasts: ToastType[],
    config: {
        position: ToastPosition;
    }
}

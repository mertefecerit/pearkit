import {ToastPosition, ToastType} from "../providers/BuiToastProvider/types";

export interface IBuiToastPropTypes {
    toasts: ToastType[],
    config: {
        position: ToastPosition;
    }
}

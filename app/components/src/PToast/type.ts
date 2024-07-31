import {ToastPosition, ToastType} from "@/providers/PToastProvider/types";

export interface IPToastPropTypes {
    toasts: ToastType[],
    config: {
        position?: ToastPosition;
        timeout?: number;
    }
}

import {ReactNode} from "react";

export interface ToastProviderProps {
    children: ReactNode;
}

export type ToastPosition = string | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';

export interface ToastType {
    id?: number;
    title: string,
    message: string,
    type?: string | 'success' | 'error' | 'warning' | 'info'
}

export interface ToastConfig {
    position: ToastPosition;
}

export interface ToastContextType {
    fire: (toast:ToastType, config?:ToastConfig) => void;
}
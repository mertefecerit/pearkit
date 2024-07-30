"use client";

import React, {createContext, useContext, useState} from 'react';
import {ToastConfig, ToastContextType, ToastProviderProps, ToastType} from "./types";
import {BuiToast} from "@/app/components/src";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<ToastProviderProps> = ({children}) => {
    const [toasts, setToasts] = useState<ToastType[]>([])
    const [toastConfig, setToastConfig] = useState<ToastConfig>({
        position: "top-end"
    })

    const fire = (toast: ToastType, config:ToastConfig) => {
        const id = Date.now();
        toast.id = id;
        setToastConfig(config)
        setToasts((prevToast) => [...prevToast, toast]);
        setTimeout(() => remove(id), 3000)
    }

    const remove = (id: number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }

    return (
        <ToastContext.Provider value={{fire}}>
            {children}
            <BuiToast config={toastConfig} toasts={toasts} />
        </ToastContext.Provider>
    );
}


export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

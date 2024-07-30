"use client";

import React, {createContext, useContext, useState} from 'react';
import {ToastConfig, ToastContextType, ToastProviderProps, ToastType} from "./types";
import {BuiToast} from "@/app/components/src";

const BuiToastContext = createContext<ToastContextType | undefined>(undefined);

export const BuiToastProvider: React.FC<ToastProviderProps> = ({children}) => {
    const [toasts, setToasts] = useState<ToastType[]>([])
    const [toastConfig, setToastConfig] = useState<ToastConfig>({
        position: "top-end"
    })

    const fire = (toast: ToastType, config?: ToastConfig) => {
        const id = Date.now();
        toast.id = id;
        if (!toast.type) toast.type = 'info';
        setToastConfig(config || toastConfig)
        setToasts((prevToast) => [...prevToast, toast]);
        setTimeout(() => remove(id), 3000)
    }

    const remove = (id: number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }

    return (
        <BuiToastContext.Provider value={{fire}}>
            {children}
            <BuiToast config={toastConfig} toasts={toasts}/>
        </BuiToastContext.Provider>
    );
}


export const useBuiToast = (): ToastContextType => {
    const context = useContext(BuiToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

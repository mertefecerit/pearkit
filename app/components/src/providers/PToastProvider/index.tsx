"use client";

import React, {createContext, useContext, useState} from 'react';
import {ToastConfig, ToastContextType, ToastProviderProps, ToastType} from "./types";
import {PToast} from "../../";

const PToastContext = createContext<ToastContextType | undefined>(undefined);

export const PToastProvider: React.FC<ToastProviderProps> = ({children}) => {
    const [toasts, setToasts] = useState<ToastType[]>([])
    const [defaultConfig, setDefaultConfig] = useState<ToastConfig>({
        position: 'top-end',
        timeout: 3000,
    })

    const fire = (toast: ToastType, config?: ToastConfig) => {
        const id = Date.now();
        toast.id = id;
        if (!toast.type) toast.type = 'info';
        const newConfig = {...defaultConfig, ...config};
        setDefaultConfig(newConfig);
        setToasts((prevToast) => [...prevToast, toast]);
        setTimeout(() => remove(id), newConfig.timeout);
    }

    const remove = (id: number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }

    return (
        <PToastContext.Provider value={{fire}}>
            {children}
            <PToast config={defaultConfig} toasts={toasts}/>
        </PToastContext.Provider>
    );
}


export const usePToast = (): ToastContextType => {
    const context = useContext(PToastContext);
    if (!context) {
        throw new Error('usePToast must be used within a PToastProvider');
    }
    return context;
}

"use client";

import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import {ToastConfig, ToastContextType, ToastProviderProps, ToastType} from "./types";
import {BuiToast} from "../../";

const BuiToastContext = createContext<ToastContextType | undefined>(undefined);

export const BuiToastProvider: React.FC<ToastProviderProps> = ({children}) => {
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
        <BuiToastContext.Provider value={{fire}}>
            {children}
            <BuiToast config={defaultConfig} toasts={toasts}/>
        </BuiToastContext.Provider>
    );
}


export const useBuiToast = (): ToastContextType => {
    const context = useContext(BuiToastContext);
    if (!context) {
        throw new Error('useBuiToast must be used within a BuiToastProvider');
    }
    return context;
}

"use client";

import React, {createContext, useCallback, useContext, useRef, useState} from 'react';
import {ToastConfig, ToastContextType, ToastProviderProps, ToastType} from "./types";
import {PToast} from "../../";

const PToastContext = createContext<ToastContextType | undefined>(undefined);

export const PToastProvider: React.FC<ToastProviderProps> = ({children}) => {
    const [toasts, setToasts] = useState<ToastType[]>([])
    const [defaultConfig, setDefaultConfig] = useState<ToastConfig>({
        position: 'top-end',
        timeout: 3000,
    })

    const lastId = useRef(0);

    const remove = useCallback((id: number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, [])

    const fire = useCallback((toast: ToastType, config?: ToastConfig) => {
        const id = ++lastId.current;
        toast.id = id;
        if (!toast.type) toast.type = 'info';
        const newConfig = {...defaultConfig, ...config};
        setDefaultConfig(newConfig);
        setToasts((prevToast) => [...prevToast, toast]);
        setTimeout(() => remove(id), newConfig.timeout);
    }, [defaultConfig, remove])

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

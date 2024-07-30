"use client"

import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";
import {PButton} from "@/app/components/src";

const PDarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(
        typeof window !== 'undefined' ? localStorage.getItem('darkMode') || 'light' : 'light'
    );

    useEffect(() => {
        if (darkMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem('darkMode', darkMode);
        }
    }, [darkMode]);

    const toggle = () => {
        setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
    };

    return (
        <PButton onClick={toggle} variant="outlined" startIcon={<Icon icon={darkMode === 'dark' ? 'mdi:moon-and-stars' : 'mdi:white-balance-sunny'}/>}/>
    );
}
export default PDarkModeToggle;



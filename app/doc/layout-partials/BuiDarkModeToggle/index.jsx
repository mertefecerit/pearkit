"use client"

import {Icon} from "@iconify/react";
import BuiButton from "../../../components/src/BuiButton";
import {useEffect, useState} from "react";

function BuiDarkModeToggle() {
    const [darkMode, setDarkMode] = useState(
        typeof window !== 'undefined' ? localStorage.getItem('darkMode') || 'light' : 'light'
    );

    useEffect(() => {
        if (darkMode === 'dark') {
            document.documentElement.setAttribute('data-mode', 'dark');
        } else {
            document.documentElement.removeAttribute('data-mode');
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem('darkMode', darkMode);
        }
    }, [darkMode]);

    const toggle = () => {
        setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
    };

    return (
        <BuiButton onClick={toggle} variant="outlined" startIcon={<Icon icon={darkMode === 'dark' ? 'mdi:moon-and-stars' : 'mdi:white-balance-sunny'}/>}/>
    );
}
export default BuiDarkModeToggle;



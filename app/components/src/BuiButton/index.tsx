"use client"

import styles from "./BuiButton.module.scss";
import {motion} from "framer-motion";
import LoadingIcon from "../components/icons/LoadingIcon";
import React from "react";
import {BuiButtonProps} from "./type";

const BuiButton:React.FC<BuiButtonProps> = (
    {
        variant = "basic",
        color = "blue",
        size = "base",
        isLoading = false,
        label,
        startIcon,
        endIcon,
        animation = true,
        raised = false,
        rounded = false,
        ...props
    }
) => {
    const content = (
        <>
            {isLoading && <LoadingIcon size="1.5em"/>}
            {!isLoading && startIcon}
            {label}
            {!isLoading && endIcon}
        </>
    )
    return (
        <motion.button
            whileTap={{scale: (props.disabled || isLoading || !animation) ? 1 : 0.95}}
            disabled={props.disabled || isLoading}
            className={`${styles.buiButton} ${styles[color]} ${styles[size]} ${styles[variant]} ${!label ? styles.onlyIcon : ''} ${raised ? styles.raised : ''} ${rounded ? styles.roundedMax : ''}`}
            {...props}
        >
            {content}
        </motion.button>
    )
}
export default BuiButton;
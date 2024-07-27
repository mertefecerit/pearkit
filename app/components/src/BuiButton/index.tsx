"use client"

import styles from "./BuiButton.module.scss";
import {motion} from "framer-motion";
import LoadingIcon from "../components/icons/LoadingIcon";
import React from "react";
import {IBuiButtonPropTypes} from "./type";

const BuiButton:React.FC<IBuiButtonPropTypes> = (
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
        disabled = false,
        target = "_blank",
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
        !props.href ?
            <motion.button
                {...props}
                whileTap={{scale: (disabled || isLoading || !animation) ? 1 : 0.95}}
                disabled={disabled || isLoading}
                className={`${styles.buiButton} ${styles[color]} ${styles[size]} ${styles[variant]} ${!label ? styles.onlyIcon : ''} ${raised ? styles.raised : ''} ${rounded ? styles.roundedMax : ''} ${props.className}`}
            >
                {content}
            </motion.button>
            :
            <motion.a
                {...props}
                target={target}
                onClick={disabled || isLoading ? (e) => e.preventDefault() : props.onClick}
                whileTap={{scale: (disabled || isLoading || !animation) ? 1 : 0.95}}
                className={`${styles.buiButton} ${styles[color]} ${styles[size]} ${styles[variant]} ${!label ? styles.onlyIcon : ''} ${raised ? styles.raised : ''} ${rounded ? styles.roundedMax : ''} ${props.className}`}
            >
                {content}
            </motion.a>
    )
}
export default BuiButton;
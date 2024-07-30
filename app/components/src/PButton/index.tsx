"use client"

import styles from "./PButton.module.scss";
import {motion} from "framer-motion";
import LoadingIcon from "../components/icons/LoadingIcon";
import React from "react";
import {IPButtonPropTypes} from "./type";

const PButton:React.FC<IPButtonPropTypes> = (
    {
        variant = "basic",
        color = "lime",
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
                className={`${styles.wrapper} ${styles[color]} ${styles[size]} ${styles[variant]} ${!label ? styles.onlyIcon : ''} ${raised ? styles.raised : ''} ${rounded ? styles.roundedMax : ''} ${props.className}`}
            >
                {content}
            </motion.button>
            :
            <motion.a
                {...props}
                target={target}
                onClick={disabled || isLoading ? (e) => e.preventDefault() : props.onClick}
                whileTap={{scale: (disabled || isLoading || !animation) ? 1 : 0.95}}
                className={`${styles.wrapper} ${styles[color]} ${styles[size]} ${styles[variant]} ${!label ? styles.onlyIcon : ''} ${raised ? styles.raised : ''} ${rounded ? styles.roundedMax : ''} ${props.className}`}
            >
                {content}
            </motion.a>
    )
}
export default PButton;
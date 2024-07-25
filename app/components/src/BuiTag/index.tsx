import styles from "./BuiTag.module.scss";
import React from "react";

interface BuiTagProps extends React.HTMLAttributes<HTMLSpanElement> {
    label: string;
    color?: string
    rounded?: boolean
    icon?: React.ReactNode
}

const BuiTag: React.FC<BuiTagProps> = (
    {
        label,
        color = "blue",
        rounded = false,
        icon,
        ...props
    }
) => {
    return (
        <span className={`${styles.wrapper} ${styles[color]} ${rounded ? styles.isRounded : ''}`} {...props}>
            {icon}
            {label}
        </span>
    )
}

export default BuiTag;
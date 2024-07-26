import styles from "./BuiTag.module.scss";
import React from "react";
import {IBuiTagPropTypes} from "@/app/components/src/BuiTag/type";

const BuiTag: React.FC<IBuiTagPropTypes> = (
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
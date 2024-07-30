import styles from "./PTag.module.scss";
import React from "react";
import {IPTagPropTypes} from "./type";

const PTag: React.FC<IPTagPropTypes> = (
    {
        label,
        color = "lime",
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

export default PTag;
import styles from './PCard.module.scss';
import React from "react";
import {IPCardPropTypes} from "./type";

const PCard:React.FC<IPCardPropTypes> = (
    {
        header,
        footer,
        title,
        subTitle,
        className,
        ...props
    }
) => {
    return (
        <div className={`${styles.wrapper} ${className}`} {...props}>
            {header}
            {title && <div className={styles.titleArea}>
                <span className={styles.title}>{title}</span>
                {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
            </div>}
            {props.children}
            {footer}
        </div>
    );
}
export default PCard;



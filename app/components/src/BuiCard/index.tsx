import styles from './BuiCard.module.scss';
import React from "react";
import {IBuiCardPropTypes} from "@/app/components/src/BuiCard/type";

const BuiCard:React.FC<IBuiCardPropTypes> = (
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
        <div className={`${styles.BuiCardWrapper} ${className}`} {...props}>
            {header}
            {title && <div className={styles.buiCardTitleArea}>
                <span className={styles.title}>{title}</span>
                {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
            </div>}
            {props.children}
            {footer}
        </div>
    );
}
export default BuiCard;



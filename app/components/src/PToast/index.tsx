"use client";

import React from "react";
import styles from "./PToast.module.scss";
import {IPToastPropTypes} from "./type";
import {AnimatePresence, motion} from "framer-motion";
import CheckCircleOutline from "../components/icons/CheckCircleOutline";
import ErrorOutline from "../components/icons/ErrorOutline";
import InfoOutline from "../components/icons/InfoOutline";
import WarningOutline from "../components/icons/WarningOutline";
import {ToastType} from "../providers/PToastProvider/types";

const PToast:React.FC<IPToastPropTypes> = (
    {
        config,
        toasts
    }
) => {

    const iconSize = "1.5em"

    const IconPlacer = (toast:ToastType) => {
        switch (toast.type) {
            case 'success':
                return <CheckCircleOutline size={iconSize} />
            case 'error':
                return <ErrorOutline size={iconSize}/>
            case 'warning':
                return <WarningOutline size={iconSize}/>
            default:
                return <InfoOutline size={iconSize}/>
        }
    }


    return (
        <ul
            className={`${styles.wrapper} ${styles[config.position || 'top-end']}`}>
            <AnimatePresence>
                {
                    toasts && toasts.map((toast) => (
                            <motion.li
                                className={`${styles.toast} ${styles[toast.type || 'info']}`}
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -50}}
                                transition={{duration: 0.2}}
                                key={toast.id}>
                                {IconPlacer(toast)}
                                <div>
                                    <span>{toast.title}</span>
                                    <span>{toast.message}</span>
                                </div>
                            </motion.li>
                        )
                    )
                }
            </AnimatePresence>
        </ul>
    );
}

export default PToast;



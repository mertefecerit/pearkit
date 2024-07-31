"use client";

import React, {useEffect} from "react";
import styles from "./PAlert.module.scss";
import {AlertType, IPAlertPropTypes} from "./type";
import {CheckCircleOutline, ErrorOutline, WarningOutline, InfoOutline, CloseIcon} from "../components/icons";
import {motion, AnimatePresence} from "framer-motion";

const PAlert: React.FC<IPAlertPropTypes> = (
    {
        type = "info",
        message,
        status = false,
        close,
        closable = true,
        lifetime,
        ...props
    }
) => {
    const iconSize = "2em";
    const iconSetter = (type: AlertType) => {
        switch (type) {
            case "success":
                return <CheckCircleOutline size={iconSize}/>
            case "danger":
                return <ErrorOutline size={iconSize}/>
            case "warning":
                return <WarningOutline size={iconSize}/>
            default:
                return <InfoOutline size={iconSize}/>
        }
    }
    const closeAlert = (e?: React.MouseEvent) => {
        closable && close && close();
    }

    useEffect(() => {
        if(status && closable && lifetime) {
            setTimeout(() => {
                closeAlert();
            },lifetime)
        }
    }, [lifetime, closable, status]);
    return (
        <AnimatePresence>
            {
                status &&
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.9}}
                    transition={{duration: 0.2, ease: "easeInOut"}}
                    {...props}
                    className={`${styles.wrapper} ${styles[type]}`}
                >
                    <div>
                        <div>
                            {iconSetter(type)}
                        </div>
                        <div>
                            {message}
                        </div>
                    </div>

                    {
                        closable && <div className={styles.closeIcon} onClick={closeAlert}>
                            <CloseIcon size={"1.5em"}/>
                        </div>
                    }
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default PAlert;



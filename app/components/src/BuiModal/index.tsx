"use client"
import styles from './BuiModal.module.scss';
import BuiOverlay from "../BuiOverlay";
import {motion} from "framer-motion";
import CloseIcon from "../components/icons/CloseIcon";
import ReactDOM from "react-dom";
import React, {useEffect, useState} from "react";
import {IBuiModalPropType} from "@/app/components/src/BuiModal/type";

const BuiModal:React.FC<IBuiModalPropType> = (
    {
        modalHeader,
        status=false,
        closable = true,
        modalTitle,
        close,
        overlayColor = 'black',
        overlayClassName = 'p-8 justify-center',
        size= 'default',
        ...props
    }
) => {
    const [documentLoaded,setDocumentLoaded] = useState(false);
    useEffect(() => setDocumentLoaded(true),[]);

    const closeHandler = () => {
        closable && close();
    }

    return documentLoaded && ReactDOM.createPortal(
        <BuiOverlay
            color={overlayColor}
            closable={closable}
            status={status}
            close={closeHandler}
            className={overlayClassName}
        >
            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                transition={{duration: 0.2}}
                className={`${styles.wrapper} ${styles[size]}`}
                {...props}
            >
                {
                    (modalHeader && React.isValidElement(modalHeader))
                        ? React.cloneElement(modalHeader)
                        : <div className={styles.modalHeader}>
                            <span>{modalTitle}</span>
                            <button onClick={closeHandler}><CloseIcon size="1em"/></button>
                    </div>
                }

                <div className={styles.modalBody}>{props.children}</div>
            </motion.div>
        </BuiOverlay>, document.body
    );
}
export default BuiModal;



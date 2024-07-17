"use client"
import styles from './BuiModal.module.scss';
import BuiOverlay from "../BuiOverlay";
import {motion,} from "framer-motion";
import PropTypes from "prop-types";
import BuiModalCloseIcon from "./components/BuiModalCloseIcon";
import ReactDOM from "react-dom";
import React, {useEffect, useState} from "react";

function BuiModal(
    {
        modalHeader,
        status=false,
        children,
        closable = true,
        modalTitle,
        close,
        overlayClassName = 'p-8 justify-center',
        className='',
        size= 'default'
    }
) {
    const [documentLoaded,setDocumentLoaded] = useState(false);
    useEffect(() => setDocumentLoaded(true),[]);

    const closeHandler = () => {
        closable && close();
    }

    return documentLoaded && ReactDOM.createPortal(
        <BuiOverlay
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
                className={`${styles.wrapper} ${styles[size]} ${className}`}
            >
                {
                    (modalHeader && React.cloneElement(modalHeader))
                    ??
                    <div className={styles.modalHeader}>
                        <span>{modalTitle}</span>
                        <button onClick={closeHandler}><BuiModalCloseIcon/></button>
                    </div>
                }

                <div className={styles.modalBody}>{children}</div>
            </motion.div>
        </BuiOverlay>, document.body
    );
}

BuiModal.propTypes = {
    status: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    close: PropTypes.func,
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    closable: PropTypes.bool,
    size: PropTypes.string
}
export default BuiModal;



"use client"

import styles from './BuiOverlay.module.scss';
import PropTypes from "prop-types";
import {motion, AnimatePresence} from "framer-motion";
import { useRef } from "react";

function BuiOverlay({
                        status = false,
                        close,
                        children,
                        color = "black",
                        closable = true,
                        className
                    }) {
    const overlayRef = useRef(null);
    const closeHandler = (e) => {
        if (e.target === overlayRef.current && closable) {
            close();
        }
    }
    return (
        <AnimatePresence>
            {
                status &&
                <motion.div
                    ref={overlayRef}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={closeHandler}
                    className={`${styles.BuiOverlayWrapper} ${styles[color]} ${className}`}
                >
                    {children}
                </motion.div>
            }
        </AnimatePresence>
    );
}

BuiOverlay.propTypes = {
    status: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    close: PropTypes.func,
    closable: PropTypes.bool,
    className: PropTypes.string
}
export default BuiOverlay;



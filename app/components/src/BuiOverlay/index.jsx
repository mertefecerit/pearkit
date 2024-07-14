"use client"

import styles from './BuiOverlay.module.scss';
import PropTypes from "prop-types";
import {motion, AnimatePresence} from "framer-motion";
import {useEffect} from "react";

function BuiOverlay({
                        status = false,
                        close,
                        children,
                        color = "black",
                        closable = true,
                        fullscreen = false,
                    }) {
    const closeHandler = () => {
        closable && !fullscreen && close();
    }
    useEffect(() => {
        const root = document.documentElement;
        if (fullscreen) {
            root.style.setProperty('--bui-overlay-opacity', 1);
        } else {
            root.style.setProperty('--bui-overlay-opacity', 0.5);
        }
    }, [fullscreen])
    return (
        <AnimatePresence>
            {
                status &&
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={closeHandler}
                    className={`${styles.BuiOverlayWrapper} ${styles[color]}`}
                >
                    <div onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
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
}
export default BuiOverlay;



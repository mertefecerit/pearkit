"use client"

import styles from './POverlay.module.scss';
import {motion, AnimatePresence} from "framer-motion";
import React, {useEffect, useRef} from "react";
import {IPOverlayPropTypes} from "./type";

const POverlay:React.FC<IPOverlayPropTypes> = (
    {
        status = false,
        close,
        color = "black",
        closable = true,
        ...props
    }
) => {
    const overlayRef = useRef(null);
    const closeHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === overlayRef.current && closable) {
            if (close) close();
        }
    }

    useEffect(() => {
        const onKeyHandler = (e:KeyboardEvent) => {
            e.key === 'Escape' && closable && close && close();
        }
        if (status) document.addEventListener('keyup', onKeyHandler);
        return () => {
            document.removeEventListener('keyup', onKeyHandler);
        }
    }, [status, closable, close]);

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
                    className={`${styles.wrapper} ${styles[color]} ${props.className}`}
                >
                    {props.children}
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default POverlay;



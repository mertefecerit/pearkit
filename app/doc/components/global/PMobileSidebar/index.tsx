import styles from './PMobileSidebar.module.scss';
import {motion, AnimatePresence} from "framer-motion";
import {IPMobileSidebarPropTypes} from "./type";
import React from "react";

const PMobileSidebar:React.FC<IPMobileSidebarPropTypes> = (
    {
        status,
        close,
        ...props
    }
) => {
    return (
        <AnimatePresence>
            {
                status &&
                <div
                    {...props}
                    onClick={close}
                    className={styles.wrapper}>
                    <motion.aside
                        onClick={(e) => e.stopPropagation()}
                        initial={{translateX: -300}}
                        animate={{translateX: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        exit={{translateX: -300}}
                    >
                        <div className={styles.mobileNav}>
                            {props.children}
                        </div>
                    </motion.aside>
                </div>
            }
        </AnimatePresence>
    );
}

export default PMobileSidebar;



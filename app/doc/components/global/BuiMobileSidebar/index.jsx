import styles from './BuiMobileSidebar.module.scss';
import {motion, AnimatePresence} from "framer-motion";

function BuiMobileSidebar({status, children, close}) {
    return (
        <AnimatePresence>
            {
                status &&
                <div
                    onClick={close}
                    className={styles.BuiMobileSidebarWrapper}>
                    <motion.aside
                        onClick={(e) =>e.stopPropagation()}
                        initial={{translateX: -300}}
                        animate={{translateX: 0}}
                        transition={{duration: 0.3, ease:"easeInOut"}}
                        exit={{translateX: -300}}
                    >
                        <div className={styles.mobileNav}>
                            {children}
                        </div>
                    </motion.aside>
                </div>
            }
        </AnimatePresence>
    );
}

export default BuiMobileSidebar;



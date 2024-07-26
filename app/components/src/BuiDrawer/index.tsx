"use client";

import styles from './BuiDrawer.module.scss';
import {motion, AnimatePresence} from "framer-motion";
import React, { useEffect, useState } from "react";
import {join} from "lodash";
import {IBuiDrawerPropTypes} from "@/app/components/src/BuiDrawer/type";

const BuiDrawer: React.FC<IBuiDrawerPropTypes> = (
    {
        status,
        close,
        position = "left",
        ...props
    }
) => {

    const [directionClass, setDirectionClass] = useState(join([styles.leftOrRightSide, styles.leftSide], ' '));

    useEffect(() => {
        switch (position) {
            case "right":
                setDirectionClass(join([styles.leftOrRightSide, styles.rightSide], ' '))
                break;
            case "top":
                setDirectionClass(join([styles.topOrBottomSide, styles.topSide], ' '))
                break;
            case "bottom":
                setDirectionClass(join([styles.topOrBottomSide, styles.bottomSide], ' '))
                break;
            case 'left' :
                setDirectionClass(join([styles.leftOrRightSide, styles.leftSide], ' '))
                break;
        }
    }, [position])

    const variants = {
        left: {visible: {x: 0}, hidden: {x: '-100%'}},
        right: {visible: {x: 0}, hidden: {x: '100%'}},
        top: {visible: {y: 0}, hidden: {y: '-100%'}},
        bottom: {visible: {y: 0}, hidden: {y: '100%'}}
    }

    return (
        <AnimatePresence>
            {
                status &&
                (
                    <div
                        onClick={close}
                        className={`${styles.wrapper}`}>
                        <motion.div
                            key={position}
                            variants={variants[position]}
                            animate="visible"
                            initial="hidden"
                            exit="hidden"
                            transition={{duration: 0.3, ease: "easeInOut"}}
                            onClick={(e) => e.stopPropagation()}
                            className={`${styles.content} ${directionClass} ${props.className}`}
                        >
                            {props.children}
                        </motion.div>
                    </div>
                )
            }
        </AnimatePresence>
    );
}
export default BuiDrawer;



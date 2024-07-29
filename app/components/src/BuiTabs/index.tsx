"use client";

import React, {useEffect, useRef, useState} from "react";
import styles from "./BuiTabs.module.scss";
import {IBuiTabsPropTypes} from "./type";
import {motion, AnimatePresence} from "framer-motion";
import {ArrowBackIos, ArrowForwardIos} from "../components/icons";

const BuiTabs:React.FC<IBuiTabsPropTypes> = (
    {
        color="blue",
        activeTabIndex= 0,
        onChange,
        ...props
    }
) => {
    const [activeIndex, setActiveIndex] = useState(activeTabIndex);
    const [showArrows, setShowArrows] = useState(false)
    const childrenArray = React.Children.toArray(props.children);
    const tabListRef = useRef<HTMLDivElement>(null);

    const scrollTabs = (direction: 'left' | 'right') => {
        if (tabListRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = tabListRef.current;
            const maxScrollLeft = scrollWidth - clientWidth;

            if (direction === 'left') {
                tabListRef.current.scrollLeft = Math.max(0, scrollLeft - clientWidth / 2);
            } else {
                tabListRef.current.scrollLeft = Math.min(maxScrollLeft, scrollLeft + clientWidth / 2);
            }
        }
    };

    const updateArrowsVisibility = () => {
        if (tabListRef.current) {
            const { clientWidth, scrollWidth } = tabListRef.current;
            setShowArrows(scrollWidth > clientWidth);
        }
    };

    useEffect(() => {
        updateArrowsVisibility();
    }, [props.children]);

    return (
        <div
            {...props}
            className={`${styles.wrapper}`}
        >

            <div className={styles.tabs}>
                {showArrows && <button onClick={() => scrollTabs('left')}>
                    <ArrowBackIos />
                </button>}
                <div className={`${styles.content} ${showArrows ? styles.isOverflow : ''}`} ref={tabListRef}>
                {
                        React.Children.map(props.children, (child, i) => {
                            return React.isValidElement(child) &&
                                <span
                                    className={`${activeIndex === i ? styles.isActive : ''} ${styles[color]} ${child.props.disabled ? styles.isDisabled : ''}`}
                                    onClick={
                                        () => {
                                            if (child.props.disabled) return;
                                            setActiveIndex(i)
                                            onChange && onChange(i)
                                        }
                                    }>
                                    {child.props.icon && <div className="me-2">{child.props.icon}</div>}
                                    {child.props.label}
                            </span>;
                        })
                    }
                </div>
                {showArrows && <button onClick={() => scrollTabs('right')}>
                    <ArrowForwardIos />
                </button>}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -50}}
                    transition={{duration: 0.3}}
                >
                    {
                        React.isValidElement(childrenArray[activeIndex]) && childrenArray[activeIndex]
                    }
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default BuiTabs;



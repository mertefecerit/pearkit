"use client";

import React from "react";
import styles from './PDropdown.module.scss';
import {ChevronDownIcon, CloseIcon} from "../components/icons";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {useClickOutside} from "../hooks";
import {DropdownItemType, IPDropdownPropTypes} from "./type";

const  PDropdown:React.FC<IPDropdownPropTypes> = (
    {
        options,
        selector = "label",
        onChange,
        selected,
        placeholder = "Select Item",
        itemComponent,
        color = "lime",
        disabled = false,
        cancelable = true,
        ...props
    }
) => {
    const [status, setStatus] = useState(false);
    const dropdownRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState(selected);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    useClickOutside(dropdownRef, () => setStatus(false));

    const toggle = (e:React.KeyboardEvent) => {
        if (disabled) return;
        if (e.key === 'Escape') setStatus(false);
        if (e.key === ' ' || e.key === "Enter") {
            e.preventDefault();
            setStatus(!status);
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setStatus(true);
            setHighlightedIndex((prevIndex) =>
                (prevIndex + 1) % options.length
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedIndex((prevIndex) =>
                (prevIndex - 1 + options.length) % options.length
            );
        } else if (e.key === 'Enter' || e.key === " ") {
            e.preventDefault();
            if (highlightedIndex >= 0) {
                selectOption(options[highlightedIndex]);
            }
        }
    }

    const selectOption = (value:DropdownItemType) => {
        if (!status) return;
        onChange(value);
        setSelectedOption(value);
        setStatus(false);
    }

    const clearSelectedOption = (e:React.MouseEvent) => {
        if (!cancelable) return;
        e.stopPropagation();
        setSelectedOption({})
        onChange({});
    }

    useEffect(() => {
        if (!status) {
            setHighlightedIndex(-1);
        }
    }, [status]);


    return (
        <div
            onKeyDown={toggle}
            onBlur={() => setStatus(false)}
            tabIndex={disabled ? -1 : 0}
            className={`${ styles.wrapper } ${ status ? styles.isOpen : '' } ${ disabled ? styles.isDisabled : '' }`}
            ref={dropdownRef}
            {...props}
        >

            <select aria-hidden={true} tabIndex={-1}>
                {
                    options && options.length > 0 && options.map((option, i) =>
                        <option key={i}>{option[selector]}</option>
                    )
                }
            </select>

            <div
                onClick={() => {!disabled && setStatus(!status)}}
                className={`${styles.placeholder} ${styles[color]}`}
            >
                {
                    selectedOption[selector] ?? <span>{placeholder}</span>
                }
                {
                    selectedOption[selector] && cancelable ?
                        <div
                            className={styles.closeIconWrapper}
                            onClick={clearSelectedOption}
                        >
                            <CloseIcon size="1.2em"/>
                        </div>
                        :
                        <motion.div
                            initial={{rotate: 0}}
                            animate={{rotate: status ? 0 : -90}}
                        >
                            <ChevronDownIcon size="1.2em"/>
                        </motion.div>
                }
            </div>
            <AnimatePresence>
                {
                    status && options && options.length > 0 &&
                    <motion.ul
                        initial={{opacity: 0, translateY: -10}}
                        animate={{opacity: 1, translateY: 0}}
                        transition={{duration: 0.2}}
                        exit={{opacity: 0, translateY: -10}}
                    >
                        {
                            options.map((option, i) =>
                                <li onClick={() => selectOption(option)}
                                    key={i}
                                    className={`${i === highlightedIndex ? styles['hg-' + color] : ''} ${styles[color]}`}
                                >
                                    {
                                        itemComponent && React.isValidElement(itemComponent)
                                            ? React.cloneElement(itemComponent, options[i])
                                            : option[selector]
                                    }
                                </li>
                            )
                        }
                    </motion.ul>
                }
            </AnimatePresence>
        </div>
    );
}
export default PDropdown;



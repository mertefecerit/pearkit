"use client";

import React, {useCallback, useEffect, useRef, useState} from "react";
import styles from "./PSearchableSelect.module.scss";
import {IPSearchableSelectPropTypes, ValuesType} from "./type";
import {motion, AnimatePresence} from "framer-motion";
import useClickOutside from "../hooks/clickoutside";
import {ChevronDownIcon, CloseIcon, LoadingIcon} from "../components/icons";
import {PInput} from "../index";
import SearchIcon from "../components/icons/SearchIcon";

const PSearchableSelect: React.FC<IPSearchableSelectPropTypes> = (
    {
        selected,
        selector,
        placeholder = 'Search & Select Record',
        onChange,
        loader,
        color = "lime",
        values,
        itemComponent,
        focusOpen = false,
        isPending = false,
        disabled = false,
        ...props
    }
) => {
    const wrapperRef = useRef(null);
    useClickOutside(wrapperRef, () => setStatus(false));

    const [status, setStatus] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [payload, setPayload] = useState<ValuesType>([])

    const onToggleHandler = useCallback(() => {
        if (disabled) return;
        setStatus((prevStatus) => !prevStatus);
    }, [disabled])


    const onToggleHandlerKey = (e: React.KeyboardEvent) => {
        if (disabled) return;
        if (e.key === ' ' || e.key === "Enter") {
            e.preventDefault();
            setStatus(!status);
        }
    }

    const onTabFocusOpen = (e: React.KeyboardEvent) => {
        if (disabled || !focusOpen) return;
        if (e.key === "Tab") {
            e.preventDefault();
            setStatus(!status);
        }
    }

    const setAndClose = (selected: {}) => {
        onChange && onChange(selected);
        setStatus(false);
    }

    const resetSelected = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange && onChange({});
        setStatus(false)
    }

    useEffect(() => {
        if (!status) return;
        loader();
        return () => {
            setPayload([]);
            setSearchTerm('');
        }
    }, [status]);

    useEffect(() => {
        if (!status && !searchTerm) return;
        const timer = setTimeout(() => {
            loader(searchTerm);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
        setPayload(values);
    }, [values]);

    return (
        <div
            {...props}
            ref={wrapperRef}
            className={`${styles.wrapper}`}
        >
            <div
                onKeyDown={onToggleHandlerKey}
                onKeyUp={onTabFocusOpen}
                tabIndex={disabled ? -1 : 0}
                className={`${styles.placeholder} ${status ? styles.isOpenContent : ''} ${styles[color]} ${disabled ? styles.isDisabled : ''}`}
                onClick={onToggleHandler}
            >
                <span>
                    {
                        ((React.isValidElement(itemComponent) && selected[selector]) ? React.cloneElement(itemComponent, selected) : selected[selector]) ?? placeholder
                    }
                </span>
                {
                    selected[selector]
                        ?
                        <div className={styles.closeIcon} onClick={resetSelected}><CloseIcon size="1.2em"/></div>
                        :
                        <motion.div
                            initial={{rotate: 0}}
                            animate={{rotate: status ? 0 : -90}}
                        >
                            <ChevronDownIcon size="1.2em"/>
                        </motion.div>
                }
            </div>
            <AnimatePresence mode={"wait"}>
                {
                    status &&
                    <motion.div className={styles.content}
                                initial={{opacity: 0, y: -10}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -10}}
                                transition={{duration: 0.1}}
                    >
                        <PInput
                            color={color}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                            placeholder="Search"
                            autoFocus={true}
                            icon={<SearchIcon size={"1.5em"}/>}
                        />
                        <div>
                            <ul>
                                {
                                    payload.length > 0
                                        ?
                                        payload.map((item, i) =>
                                            <li key={i} onClick={() => setAndClose(item)}>
                                                {
                                                    React.isValidElement(itemComponent) ? React.cloneElement(itemComponent, item) : item[selector]
                                                }
                                            </li>
                                        )
                                        :
                                        <span>No founded data</span>
                                }
                            </ul>
                            {
                                isPending && <div className={styles[color]}>
                                    <LoadingIcon size={"3em"}/>
                                </div>
                            }
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}

export default PSearchableSelect;



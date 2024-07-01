"use client"
import {Icon} from "@iconify/react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion, AnimatePresence} from "framer-motion"
import {useEffect, useState} from "react";
import {forEach} from "lodash";
import scss from "./BNavItem.module.scss";

function BNavItem({label, childItems}) {
    const [isActive, setIsActive] = useState(false)
    const pathname = usePathname();
    useEffect(() => {
        forEach(childItems, (item) => {
            if (item.path === pathname) return setIsActive(true);
        })
    }, []);
    return (
        <div className={scss.bNavItem}>
            <div onClick={() => setIsActive(!isActive)}
                 className={scss.clickArea}>
                <motion.div
                    initial={{rotate:0}}
                    animate={{rotate: isActive ? 0 : -90}}
                >
                    <Icon icon="mdi:chevron-down" height={20}/>
                </motion.div>
                <span>{label}</span>
            </div>
            {
                <AnimatePresence initial={false}>
                    isActive
                    &&
                    <motion.ul
                        initial={{height:0, opacity:0}}
                        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{
                            overflow: 'hidden',
                            pointerEvents: isActive ? 'auto' : 'none'
                        }}
                        className={scss.contentArea}
                    >
                        {
                            childItems && childItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className={`${pathname === item.path ? scss.active : ''}`}
                                        href={item.path}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </motion.ul>
                </AnimatePresence>
            }

        </div>
    )
}

export default BNavItem;
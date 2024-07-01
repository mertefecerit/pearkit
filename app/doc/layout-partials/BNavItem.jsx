"use client"
import {Icon} from "@iconify/react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion, AnimatePresence} from "framer-motion"
import {useEffect, useState} from "react";
import {forEach} from "lodash";

function BNavItem({label, childItems}) {
    const [isActive, setIsActive] = useState(false)
    const pathname = usePathname();
    useEffect(() => {
        forEach(childItems, (item) => {
            if (item.path === pathname) return setIsActive(true);
        })
    }, []);
    return (
        <>
            <div onClick={() => setIsActive(!isActive)}
                 className="font-medium flex gap-1 items-center cursor-pointer hover:bg-gray-100 py-1 rounded">
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
                        className="pl-2">
                        {
                            childItems && childItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className={`inline-block w-full border-l-2 pl-4 py-1 hover:bg-gray-100 hover:rounded-r hover:border-gray-500 ${pathname === item.path ? 'border-blue-500 bg-blue-100 rounded-r text-blue-700 hover:bg-blue-200 hover:border-blue-500' : ''}`}
                                        href={item.path}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </motion.ul>
                </AnimatePresence>
            }

        </>
    )
}

export default BNavItem;
"use client"
import styles from './PRightNav.module.scss';
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {find} from "lodash";
import Link from "next/link";
import AsideContent from "@/app/doc/layout-partials/AsideContent";

interface IPRightNavAsideMenuItemType {
    path: string;
    label: string;
}

const PRightNav = () => {
    const routes = AsideContent();
    const pathname = usePathname();
    const [fastMenuContent, setFastMenuContent] = useState<IPRightNavAsideMenuItemType[]>([])
    const [currentPathHash, setCurrentPathHash] = useState('');

    useEffect(() => {
        setCurrentPathHash('');
        find(routes, function(o) {
            find(o.children, function(i){
                if (i.path === pathname){
                    setFastMenuContent(i.children)
                }
            })
        })
    },[pathname])

    useEffect(() => {
        setCurrentPathHash(window.location.hash)
    }, []);

    return (
        <aside className={styles.wrapper}>
            <nav>
                <ul>
                    {
                        fastMenuContent && fastMenuContent.map((item, i) => (
                            <li key={i}>
                                <Link
                                    onClick={() => setCurrentPathHash(item.path)}
                                    className={`${currentPathHash === item.path ? styles.active : ''}`}
                                    href={item.path}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    );
}

export default PRightNav;



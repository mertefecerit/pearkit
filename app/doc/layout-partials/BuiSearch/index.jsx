"use client"

import {BuiInput, BuiModal} from "@/app/components/src";
import AsideContent from "@/app/doc/layout-partials/AsideContent";
import {useEffect, useMemo, useState} from "react";
import Fuse from "fuse.js";
import {Icon} from "@iconify/react";
import Link from "next/link";
import styles from "./BuiSearc.module.scss";

function BuiSearch({status, close}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const asideContent = useMemo(() => AsideContent(), []);
    const fuse = useMemo(() => new Fuse(asideContent, {
        keys: ['children.label'],
        includeMatches: true,
        threshold: 0
    }), [asideContent]);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setResults([]);
            return;
        }
        const foo = fuse.search(searchTerm);

        const matchedChildren = foo.flatMap(result =>
            result.matches.map(match => result.item.children.find(child => child.label === match.value))
        );

        setResults(matchedChildren);
    }, [searchTerm, fuse]);

    const closeHandler = () => {
        setSearchTerm('');
        setResults([]);
        close();
    }

    return (
        <BuiModal status={status} modalTitle="Search Document" close={closeHandler}>
            <div className={styles.wrapper}>
                <BuiInput
                    focus={true}
                    placeholder="Modal | Button | Badge ..."
                    icon={<Icon icon="mdi:search" width={20}/>}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {
                    results.length > 0 &&
                    <div className={styles.searchResultContent}>
                        {
                            results.map((mainItem,i) => (
                                <div key={i}>
                                    <Link onClick={closeHandler} href={mainItem.path}>
                                        {mainItem.label}
                                    </Link>
                                    <ul>
                                        {
                                            mainItem.children.map((subItem, i) => (
                                                <li key={i}>
                                                    <Link onClick={closeHandler} href={mainItem.path + subItem.path}>{subItem.label}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </BuiModal>
    );
}
export default BuiSearch;



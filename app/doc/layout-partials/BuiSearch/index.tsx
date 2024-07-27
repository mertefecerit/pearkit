"use client"

import {BuiInput, BuiModal} from "@/app/components/src";
import AsideContent from "@/app/doc/layout-partials/AsideContent";
import React, {useEffect, useMemo, useState} from "react";
import Fuse from "fuse.js";
import {Icon} from "@iconify/react";
import Link from "next/link";
import styles from "./BuiSearc.module.scss";
import {IBuiSearchPropTypes, BuiSearchChild} from "./type";

const BuiSearch: React.FC<IBuiSearchPropTypes> = (
    {
        status,
        close
    }
) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<BuiSearchChild[]>([]);
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

        const matchedChildren: BuiSearchChild[] = foo.flatMap((result: any) =>
            result.matches ? result.matches.map((match: any) =>
                result.item.children.find((child: BuiSearchChild) =>
                    child.label === match.value)
            ).filter((child: BuiSearchChild | undefined): child is BuiSearchChild => child !== undefined) : []
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
                    autoFocus
                    placeholder="Modal | Button | Badge ..."
                    icon={<Icon icon="mdi:search" width={20}/>}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {
                    results.length > 0 &&
                    <div className={styles.searchResultContent}>
                        {
                            results.map((mainItem, i) => (
                                <div key={i}>
                                    <Link onClick={closeHandler} href={mainItem.path}>
                                        {mainItem.label}
                                    </Link>
                                    <ul>
                                        {
                                            mainItem.children.map((subItem, i) => (
                                                <li key={i}>
                                                    <Link onClick={closeHandler}
                                                          href={mainItem.path + subItem.path}>{subItem.label}</Link>
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



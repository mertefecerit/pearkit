"use client"

import {PInput, PModal} from "@/app/components/src";
import AsideContent from "@/app/doc/layout-partials/AsideContent";
import React, {useEffect, useMemo, useState} from "react";
import Fuse from "fuse.js";
import {Icon} from "@iconify/react";
import Link from "next/link";
import styles from "./PSearch.module.scss";
import {IPSearchPropTypes, PSearchChild} from "./type";

const PSearch: React.FC<IPSearchPropTypes> = (
    {
        status,
        close
    }
) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<PSearchChild[]>([]);
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

        const matchedChildren: PSearchChild[] = foo.flatMap((result: any) =>
            result.matches ? result.matches.map((match: any) =>
                result.item.children.find((child: PSearchChild) =>
                    child.label === match.value)
            ).filter((child: PSearchChild | undefined): child is PSearchChild => child !== undefined) : []
        );

        setResults(matchedChildren);
    }, [searchTerm, fuse]);

    const closeHandler = () => {
        setSearchTerm('');
        setResults([]);
        close();
    }

    return (
        <PModal status={status} modalTitle="Search Document" close={closeHandler}>
            <div className={styles.wrapper}>
                <PInput
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
        </PModal>
    );
}
export default PSearch;



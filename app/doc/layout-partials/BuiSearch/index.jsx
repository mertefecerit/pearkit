"use client"

import {BuiInput, BuiModal} from "@/app/components/src";
import AsideContent from "@/app/doc/layout-partials/AsideContent";
import {useEffect, useMemo, useState} from "react";
import Fuse from "fuse.js";
import {Icon} from "@iconify/react";
import Link from "next/link";

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
            <div className="flex flex-col gap-4">
                <BuiInput
                    placeholder="Modal | Button | Badge ..."
                    icon={<Icon icon="mdi:search" width={20}/>}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {
                    results.length > 0 &&
                    <div className="border p-4 rounded-xl bg-white flex flex-col gap-4 dark:bg-gray-800 dark:border-gray-700">
                        {
                            results.map((mainItem,i) => (
                                <div key={i}>
                                    <Link onClick={closeHandler} className="text-xl font-bold hover:text-blue-500" href={mainItem.path}>
                                        {mainItem.label}
                                    </Link>
                                    <ul className="pl-4">
                                        {
                                            mainItem.children.map((subItem, i) => (
                                                <li key={i}>
                                                    <Link className="hover:text-blue-500" onClick={closeHandler} href={mainItem.path + subItem.path}>{subItem.label}</Link>
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



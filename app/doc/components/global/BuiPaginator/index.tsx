"use client"

import styles from './BuiPaginator.module.scss';
import Link from "next/link";
import {Icon} from "@iconify/react";
import {flatten} from "lodash";
import AsideContent from "@/app/doc/layout-partials/AsideContent";
import {useMemo} from "react";
import {usePathname} from "next/navigation";

const BuiPaginator = () =>  {
    const routes = AsideContent();
    const pathname = usePathname();

    const flattenRoutes = useMemo(() => {
        const result = routes.map((item) => item.children);
        return flatten(result);
    },[routes])
    const currentIndex = flattenRoutes.findIndex(route => route.path === pathname);

    const previousRoute = currentIndex > 0 ? flattenRoutes[currentIndex - 1] : null;
    const nextRoute = currentIndex < flattenRoutes.length - 1 ? flattenRoutes[currentIndex + 1] : null;

    return (
        <div className={styles.BuiPaginatorWrapper}>
            <div>
            {
                previousRoute && <Link href={previousRoute.path}>
                    <Icon icon="mdi:chevron-left"></Icon>
                    <span>{previousRoute.label}</span>
                </Link>
            }
            </div>
            <div>
            {
                nextRoute && <Link href={nextRoute.path}>
                    <span>{nextRoute.label}</span>
                    <Icon icon="mdi:chevron-right"></Icon>
                </Link>
            }
            </div>
        </div>
    );
}
export default BuiPaginator;



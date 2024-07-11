import styles from './BuiPaginator.module.scss';
import Link from "next/link";
import {Icon} from "@iconify/react";

function BuiPaginator({prev, next}) {
    return (
        <div className={styles.BuiPaginatorWrapper}>
            <div>
            {
                prev && <Link href={prev.path}>
                    <Icon icon="mdi:chevron-left"></Icon>
                    <span>{prev.label}</span>
                </Link>
            }
            </div>
            <div>
            {
                next && <Link href={next.path}>
                    <span>{next.label}</span>
                    <Icon icon="mdi:chevron-right"></Icon>
                </Link>
            }
            </div>
        </div>
    );
}
export default BuiPaginator;



"use client"
import styles from './BuiBadge.module.scss';
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

function BuiBadge({value, size='xs', color="red"}) {
    const [modValue, setModValue] = useState('0');
    useEffect(() => {
        if (value > 99){
            setModValue('9+')
        }else{
            setModValue(value.toString())
        }
    }, [value]);
    return (
        <div className={`${styles.BuiBadgeWrapper} ${styles[size]} ${styles[color]}`}>
            {modValue}
        </div>
    );
}
BuiBadge.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string
}
export default BuiBadge;



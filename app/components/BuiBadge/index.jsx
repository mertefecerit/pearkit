"use client"
import styles from './BuiBadge.module.scss';
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

function BuiBadge({value, size='xs', color="red", positions}) {
    const [modValue, setModValue] = useState('');
    useEffect(() => {
        if (value > 99){
            setModValue('9+')
        }else{
            setModValue(value.toString())
        }
    }, [value]);
    return (
        <div style={{...positions}} className={`${styles.BuiBadgeWrapper} ${styles[size]} ${styles[color]} ${positions ? styles.havePosition: ''}`}>
            {modValue}
        </div>
    );
}
BuiBadge.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    positions: PropTypes.object
}
export default BuiBadge;



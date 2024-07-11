"use client"
import styles from './BuiButtonGroup.module.scss';
import PropTypes from "prop-types";
import React from "react";

function BuiButtonGroup({children, orientation="horizontal"}) {
    return (
        <div className={`${styles.BuiButtonGroupWrapper} ${styles[orientation]}`}>
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {animation:false})
                })
            }
        </div>
    );
}

BuiButtonGroup.propTypes = {
    children: PropTypes.node.isRequired,
    orientation: PropTypes.string
}
export default BuiButtonGroup;



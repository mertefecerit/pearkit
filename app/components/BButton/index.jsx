"use client"
import scss from "./assets/scss/BButton.module.scss";
import {motion} from "framer-motion";
import PropTypes from "prop-types";

function BButton(
    {
        type = "button",
        variant = "basic",
        color = "blue",
        size= "base",
        isLoading=false,
        disabled=false,
        children,
        startIcon,
        endIcon
    }
) {
    return (
        <motion.button
            disabled={disabled || isLoading}
            type={type}
            whileTap={{scale: 0.95}}
            className={`${scss.bbutton} ${scss[color]} ${scss[size]} ${scss[variant]}`}
        >
            {startIcon}
            {children}
            {endIcon}
        </motion.button>
    )
}
BButton.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    startIcon: PropTypes.elementType,
    endIcon: PropTypes.elementType,
}
export default BButton;
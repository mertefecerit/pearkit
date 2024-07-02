"use client"
import scss from "./BuiButton.module.scss";
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import LoadingIcon from "@/app/components/BuiButton/LoadingIcon";

function BuiButton(
    {
        type = "button",
        variant = "basic",
        color = "blue",
        size = "base",
        isLoading = false,
        disabled = false,
        children,
        startIcon,
        endIcon,
        href,
        onClick
    }
) {
    const content = (
        <>
            {isLoading && <LoadingIcon/>}
            {!isLoading && startIcon}
            {children}
            {!isLoading && endIcon}
        </>
    )
    return (
        !href ?
            <motion.button type={type}
                           onClick={onClick}
                           whileTap={{scale: (disabled || isLoading) ? 1 : 0.95}}
                           disabled={disabled || isLoading}
                           className={`${scss.buiButton} ${scss[color]} ${scss[size]} ${scss[variant]}`}
            >
                {content}
            </motion.button>
            :
            <motion.a href={href}
                      whileTap={{scale: (disabled || isLoading) ? 1 : 0.95}}
                      disabled={disabled || isLoading}
                      className={`${scss.buiButton} ${scss[color]} ${scss[size]} ${scss[variant]}`}
            >
                {content}
            </motion.a>
    )
}

BuiButton.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    startIcon: PropTypes.elementType,
    endIcon: PropTypes.elementType,
    href: PropTypes.string,
    onClick: PropTypes.func
}
export default BuiButton;
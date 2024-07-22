"use client"
import styles from "./BuiButton.module.scss";
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import LoadingIcon from "../components/icons/LoadingIcon";

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
        // link section
        href,
        target = '_target',
        // link section
        onClick,
        animation = true,
        raised = false,
        rounded = false,
        ariaLabel='button',
        className,
    }
) {
    const content = (
        <>
            {isLoading && <LoadingIcon size="1.5em"/>}
            {!isLoading && startIcon}
            {children}
            {!isLoading && endIcon}
        </>
    )
    return (
        !href ?
            <motion.button type={type}
                           aria-label={ariaLabel}
                           onClick={onClick}
                           whileTap={{scale: (disabled || isLoading || !animation) ? 1 : 0.95}}
                           disabled={disabled || isLoading}
                           className={`${styles.buiButton} ${styles[color]} ${styles[size]} ${styles[variant]} ${!children ? styles.onlyIcon : ''} ${raised ? styles.raised : ''} ${rounded ? styles.roundedMax : ''} ${className}`}
            >
                {content}
            </motion.button>
            :
            <motion.a href={href}
                      role="button"
                      target={target}
                      whileTap={{scale: (disabled || isLoading || !animation) ? 1 : 0.95}}
                      disabled={disabled || isLoading}
                      className={`${styles.buiButton} ${styles[color]} ${styles[size]} ${styles[variant]} ${!children ? styles.onlyIcon : ''} ${raised ? styles.raised : ''} ${rounded ? styles.roundedMax : ''} ${className}`}
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
    target: PropTypes.string,
    onClick: PropTypes.func,
    animation: PropTypes.bool,
    raised: PropTypes.bool,
    rounded: PropTypes.bool,
    ariaLabel: PropTypes.string,
    className: PropTypes.string
}
export default BuiButton;
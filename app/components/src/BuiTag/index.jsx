import PropTypes from "prop-types";
import styles from "./BuiTag.module.scss";

function BuiTag(
    {
        label,
        color = "blue",
        rounded = false,
        className,
        icon
    }
) {
    return (
        <span className={`${styles.wrapper} ${styles[color]} ${rounded ? styles.isRounded : ''} ${className}`}>
            {icon}
            {label}
        </span>
    )
}

BuiTag.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    rounded: PropTypes.bool,
    className : PropTypes.string,
}
export default BuiTag;
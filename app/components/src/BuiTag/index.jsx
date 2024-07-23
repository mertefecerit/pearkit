import PropTypes from "prop-types";
import styles from "./BuiTag.module.scss";

function BuiTag({children, color="blue"}) {
    return (
        <code className={`${styles.wrapper} ${styles[color]}`}>{children}</code>
    )
}
BuiTag.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string
}
export default BuiTag;